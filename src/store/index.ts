import Vue from 'vue';
import Vuex from 'vuex';
import LocalStorage from '../classes/LocalStorage';
import { IArticle, IStorageData } from '../interfaces';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        defaultCategories: ['All', 'Upcoming', 'Important', 'Done'],
        tags: [],
        articles: [],
        articleID: 0
    },
    getters: {
        articles: (state): Array<IArticle> => {
            return state.articles.sort((articleA: IArticle, articleB: IArticle): number => {
                if (articleA.isImportant && !articleB.isImportant) {
                    return -1;
                } else if (!articleA.isImportant && articleB.isImportant) {
                    return 1;
                } else {
                    return 0;
                }
            }).sort((articleA: IArticle, articleB: IArticle): number => {
                if (articleA.isDone && !articleB.isDone) {
                    return 1;
                } else if (!articleA.isDone && articleB.isDone) {
                    return -1;
                } else {
                    return 0;
                }
            });
        },
        categories: (state): Array<string> => {
            return state.defaultCategories;
        },
        tags: (state): Array<string> => {
            return state.tags;
        },
        articleID: (state): number => {
            return state.articleID;
        }
    },
    mutations: {
        load: (state): void => {
            const loadData: IStorageData = LocalStorage.load();
            state.articles = loadData.articles;
            state.articleID = loadData.articleID;

            state.tags.splice(0, state.tags.length);
            state.articles.forEach((article: IArticle): void => {
                article.tags.forEach((tag: string): void => {
                    if (state.tags.indexOf(tag) < 0) {
                        state.tags.push(tag);
                    }
                });
            });
        },
        save: (state): void => {
            LocalStorage.save({ articles: state.articles, articleID: state.articleID });

            state.tags.splice(0, state.tags.length);
            state.articles.forEach((article: IArticle): void => {
                article.tags.forEach((tag: string): void => {
                    if (state.tags.indexOf(tag) < 0) {
                        state.tags.push(tag);
                    }
                });
            });
        },
        addArticle: (state, article: IArticle): void => {
            state.articleID++;
            state.articles.push(article);
        },
        deleteArticle: (state, articleID: number): void => {
            let index: number = -1;

            state.articles.forEach((article: IArticle, articleIndex: number) => {
                if (article.articleID === articleID) {
                    index = articleIndex;
                }
            });

            if (index >= 0) {
                state.articles.splice(index, 1);
            }
        }
    },
    actions: {
        load({ commit }): boolean { commit('load'); return true; },
        save({ commit }): boolean { commit('save'); return true; },
        addArticle({ commit }, article: IArticle): void { commit('addArticle', article); },
        deleteArticle({ commit }, articleID: IArticle): void { commit('deleteArticle', articleID); }
    }
});