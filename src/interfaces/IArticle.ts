export interface IArticle {
    articleID?: number;
    contents: string;
    begin: number;
    end: number;
    isImportant: boolean;
    isDone: boolean;
    tags: Array<string>;
    createdAt?: number;
}