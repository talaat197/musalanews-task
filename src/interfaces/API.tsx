import { IArticle } from "./News";

export interface APIResponse {
    status : string,
    totalResults : number,
    articles : [IArticle]
}