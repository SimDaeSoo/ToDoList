import { IStorageData } from '../interfaces';
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
        if (!localStorage.data) {
            const defaultData: IStorageData = { articles: [] }
            this.save(defaultData);
        }

        this.load();
    }

    public load(): any {
        const loadData: IStorageData = JSON.parse(localStorage.getItem('data'));
        return loadData;
    }

    public save(data: IStorageData): void {
        localStorage.setItem('data', JSON.stringify(data));
    }
}

export default LocalStorage.instance;