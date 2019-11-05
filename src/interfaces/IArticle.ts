export interface IArticle {
    articleID: number;
    contents: string; // 검색 넣어주고 싶은데.. 검색엔진을 효율적으로 만들줄 모른다.. 우선 전체탐색으로 진행한다. -> 추후 디벨롭. (추후란 없겠지만.)
    begin: number;
    end: number;
    isImportant: boolean;
    isDone: boolean;
    tags: Array<string>;
}