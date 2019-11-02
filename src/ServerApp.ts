import * as http from "http";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as fs from 'fs';

class ServerApp {
    public express: express.Application = express();
    public server: http.Server;

    // public functions
    public async initialize(): Promise<void> {
        this.middleware();
        this.routes();
    }
    public createServer(port: number): void {
        this.express.set("port", port);
        this.server = http.createServer(this.express);
        this.server.listen(port);
    }

    // private functions
    private middleware(): void {
        this.express.use(bodyParser.json({ limit: "10mb" }));
        this.express.use(bodyParser.urlencoded({ extended: false, limit: "10mb", parameterLimit: 1000000 }));
    }
    private routes(): void {
        this.express.get("*", this.routing);
    }
    private routing(req: express.Request, res: express.Response): void {
        const filePath: string = path.join("dist", req.url);

        if (this.isFile(filePath)) {
            res.sendfile(filePath);
        } else {
            res.sendfile(path.join("dist", "index.html"));
        }
    }
    private isFile(filePath: string): boolean {
        return fs.existsSync(filePath);
    }
}

const INITIALIZE_PORT: number = 8080;
const serverApp: ServerApp = new ServerApp();
serverApp.initialize();
serverApp.createServer(INITIALIZE_PORT);