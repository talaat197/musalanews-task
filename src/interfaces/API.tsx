import { Article } from "./News";

export interface APIResponse {
    status : string,
    totalResults : number,
    articles : [Article]
}