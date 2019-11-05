import Vue from 'vue';
import Vuex from 'vuex';
import LocalStorage from '../classes/LocalStorage';
import { IArticle, IStorageData } from '../interfaces';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        defaultCategories: ['All', 'Upcoming', 'Important', 'Done'],
        defaultTags: [],
        articles: []
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
        }
    },
    mutations: {
        load: (state): void => {
            const loadData: IStorageData = LocalStorage.load();
            state.articles = loadData.articles;
        },
        save: (state): void => {
            LocalStorage.save({ articles: state.articles });
        },
        addArticle: (state, article: IArticle): void => {
            state.articles.push(article);
        },
        deleteArticle: (state, articleID: number): void => {
            let index: number = -1;

            state.articles.forEach((article: IArticle) => {
                if (article.articleID === articleID) {
                    index = article.articleID;
                }
            });

            if (index >= 0) {
                state.articles.splice(index, 1);
            } else {
                console.error('찾는 Article이 없다.');
            }
        }
    },
    actions: {
        load({ commit }): void { commit('load'); },
        save({ commit }): void { commit('save'); },
        addArticle({ commit }, article: IArticle): void { commit('addArticle', article); commit('save'); },
        deleteArticle({ commit }, articleID: IArticle): void { commit('deleteArticle', articleID); commit('save'); }
    }
});