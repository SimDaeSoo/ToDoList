import Vue from 'vue';
import Vuex from 'vuex';
import LocalStorage from '../classes/LocalStorage';
import { IArticle, ITag } from '../interfaces';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        articles: [],
        autoSave: false
    },
    getters: {
        articles: (state): Array<IArticle> => {
            return state.articles;
        },
        autoSave: (state): boolean => {
            return state.autoSave;
        },
    },
    mutations: {
        loadArticles: (state): void => {
            const loadData: {
                articles: Array<IArticle>,
                autoSave: boolean
            } = LocalStorage.instance.load();

            state.articles = loadData.articles;
            state.autoSave = loadData.autoSave;
        },
        save: (state): void => {
            LocalStorage.instance.save({ articles: state.articles, autoSave: state.autoSave });
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
        },
        setAutoSave: (state, flag: boolean): void => {
            state.autoSave = flag;
        }
    },
    actions: {
        load({ commit }): void { commit('loadArticles'); commit('loadTags'); },
        save({ commit }): void { commit('save'); },
        addArticle({ commit }, article: IArticle): void { commit('addArticle', article); },
        deleteArticle({ commit }, articleID: IArticle): void { commit('deleteArticle', articleID); },
        setAutoSave({ commit }, flag: boolean): void { commit('setAutoSave', flag); }
    }
});