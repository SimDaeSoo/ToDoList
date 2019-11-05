import { IStorageData, IArticle } from '../interfaces';
import * as crypto from "crypto-js";
class LocalStorage {
    private key: string;
    private static _instance: LocalStorage;

    public static get instance(): LocalStorage {
        if (!LocalStorage._instance) {
            this._instance = new LocalStorage();
            this._instance.initialize();
        }
        return this._instance;
    }

    private initialize(): void {
        if (!localStorage.data) {
            const key: string = 'magic_number';
            const defaultData: IStorageData = { articles: [], articleID: 0, key }
            this.save(defaultData);
        }

        this.load();
    }

    public load(): any {
        const loadData: IStorageData = JSON.parse(localStorage.getItem('data'));
        this.key = loadData.key;

        loadData.articles.forEach((article): void => {
            article.contents = crypto.AES.decrypt(article.contents, this.key).toString(crypto.enc.Utf8);
        });
        return loadData;
    }

    public save(data: IStorageData): void {
        data.articles.forEach((article): void => {
            article.contents = crypto.AES.encrypt(article.contents, this.key).toString();
        });
        if (!data.key) {
            data.key = this.key;
        }
        localStorage.setItem('data', JSON.stringify(data));

        // 오브젝트의 contents를 직접 바꿔주기 때문에 다시 복호화 해놓는다. 안하면 화면에 암호화 상태로 뜸.
        data.articles.forEach((article): void => {
            article.contents = crypto.AES.decrypt(article.contents, this.key).toString(crypto.enc.Utf8);
        });
    }

    public clear(): void {
        localStorage.clear();
    }
}

export default LocalStorage.instance;