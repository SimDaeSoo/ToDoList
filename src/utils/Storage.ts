class Storage {
    private static _instance: Storage;

    public static get instance(): Storage {
        if (!this.instance === undefined) {
            this._instance = new Storage();
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

export default Storage.instance;