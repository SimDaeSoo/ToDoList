class LocalStorage {
    private static _instance: LocalStorage;

    public static get instance(): LocalStorage {
        if (!this.instance === undefined) {
            this._instance = new LocalStorage();
        }
        return this._instance;
    }

    public load(): { articles: Array<IArticle>, autoSave: boolean } {
        console.error('not maked load');
    }

    public save(data: { articles: Array<IArticle>, autoSave: boolean }): void {
        console.error('not maked save')
    }
}

export default LocalStorage.instance;