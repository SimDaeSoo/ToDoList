import { IArticle } from './IArticle';
export interface IStorageData {
    articles: Array<IArticle>,
    autoIncreamentID: number
}