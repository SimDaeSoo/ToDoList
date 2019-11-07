import { IStorageData, IArticle } from '../interfaces';
import { SECRET_KEY } from '../../config';
import * as crypto from "crypto-js";
class LocalStorage {
    private static _instance: LocalStorage;

    public static get instance(): LocalStorage {
        if (!LocalStorage._instance) {
            this._instance = new LocalStorage();
            this._instance.initialize();
        }
        return this._instance;
    }

    private initialize(): void {
        const loadData: IStorageData = JSON.parse(localStorage.getItem('data'));

        if (!loadData || !loadData.articles || loadData.autoIncreamentID === undefined) {
            const defaultData: IStorageData = { articles: [], autoIncreamentID: 0 }
            this.clear();
            this.save(defaultData);
            return;
        }

        this.load();
    }

    public load(): IStorageData {
        const loadData: IStorageData = JSON.parse(localStorage.getItem('data'));

        const decryptArticles: Array<IArticle> = loadData.articles.map((article: IArticle): IArticle => {
            const copyArticle: IArticle = Object.assign({}, article);
            copyArticle.contents = crypto.AES.decrypt(article.contents, SECRET_KEY).toString(crypto.enc.Utf8);
            return copyArticle;
        });

        loadData.articles = decryptArticles;
        return loadData;
    }

    public save(data: IStorageData): void {
        const encryptArticles: Array<IArticle> = data.articles.map((article: IArticle): IArticle => {
            const copyArticle: IArticle = Object.assign({}, article);
            copyArticle.contents = crypto.AES.encrypt(article.contents, SECRET_KEY).toString();
            return copyArticle;
        });

        data.articles = encryptArticles;
        localStorage.setItem('data', JSON.stringify(data));
    }

    public clear(): void {
        localStorage.clear();
    }
}

export default LocalStorage.instance;