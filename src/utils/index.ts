import { IArticle, IFilterOptions } from '../interfaces';

export function isSameRoute(from: string, to): boolean {
    return from.toLowerCase().replace(/\//g, '') === to.toLowerCase().replace(/\//g, '');
}

export function getBlankArticle(articleID: number): IArticle {
    const defaultArticle: IArticle = {
        articleID: articleID,
        contents: "",
        begin: Date.now(),
        end: Date.now(),
        isImportant: false,
        isDone: false,
        tags: []
    };

    return defaultArticle;
}

export function getFilteredArticles(articles: Array<IArticle>, option: IFilterOptions): Array<IArticle> {
    const MILLISEC_FOR_DAY: number = 86400000;
    const result: Array<IArticle> = [];
    option.type = option.type.toLowerCase();

    articles.forEach((article: IArticle): void => {
        if (option.name === 'category') {
            switch (option.type) {
                case 'all':
                    result.push(article);
                    break;
                case 'important':
                    if (article.isImportant) result.push(article);
                    break;
                case 'done':
                    if (article.isDone) result.push(article);
                    break;
                case 'upcoming':
                    if (article.end - Date.now() <= MILLISEC_FOR_DAY && article.end - Date.now() >= -MILLISEC_FOR_DAY) result.push(article);
                    break;
            }
        } else if (option.name === 'tags') {
            let flag: boolean = false;

            article.tags.forEach((tag: string): void => {
                if (tag.toLowerCase() === option.type) {
                    flag = true;
                }
            })

            if (flag) {
                result.push(article);
            }
        } else if (option.name === 'search') {
            const articleToString: string = article.contents + article.tags.toString();

            if (articleToString.toLowerCase().indexOf(option.type) >= 0) {
                result.push(article);
            }
        }
    });

    return result;
}