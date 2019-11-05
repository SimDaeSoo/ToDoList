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
        // 복호화 과정을 거쳐서 리턴하자.
        return loadData;
    }

    public save(data: IStorageData): void {
        // 암호화 과정을 거쳐서 저장하자.
        localStorage.setItem('data', JSON.stringify(data));
    }

    public clear(): void {
        localStorage.clear();
    }
}

export default LocalStorage.instance;