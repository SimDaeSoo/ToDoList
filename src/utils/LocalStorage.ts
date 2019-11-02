class LocalStorage {
    private static _instance: LocalStorage;

    public static get instance(): LocalStorage {
        if (!this.instance === undefined) {
            this._instance = new LocalStorage();
        }
        return this._instance;
    }

    public load(): any {
        console.error('not maked load');
    }

    public export(): any {
        console.error('not maked export');
    }

    public save(): any {
        console.error('not maked save')
    }
}

export default LocalStorage.instance;