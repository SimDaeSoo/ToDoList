import { IArticle } from './IArticle';
export interface IStorageData {
    articles: Array<IArticle>,
    articleID: number,
    key?: string;
}