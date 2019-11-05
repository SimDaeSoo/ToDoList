import Vue from 'vue';
import Vuex from 'vuex';
import LocalStorage from '../classes/LocalStorage';
import { IArticle, IStorageData } from '../interfaces';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        defaultCategories: ['All', 'Upcoming', 'Important', 'Done'],
        defaultTags: [],
        articles: [],
        articleID: 0
    },
    getters: {
        articles: (state): Array<IArticle> => {
            return state.articles;
        },
        categories: (state): Array<string> => {
            return state.defaultCategories;
        },
        tags: (state): Array<string> => {
            return state.defaultTags.concat([]);
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
        },
        save: (state): void => {
            LocalStorage.save({ articles: state.articles, articleID: state.articleID });
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
        },
        editArticle: (state, article: IArticle): void => {
        }
    },
    actions: {
        load({ commit }): void { commit('load'); },
        save({ commit }): void { commit('save'); },
        addArticle({ commit }, article: IArticle): void { commit('addArticle', article); commit('save'); },
        deleteArticle({ commit }, articleID: IArticle): void { commit('deleteArticle', articleID); commit('save'); }
    }
});