import { IArticle } from "../interfaces/News";
import callAPI from "./CallAPI";
import { GET_NEWS_URL } from "./urls";


export const fetchNewsAPI = async (searchKey : string) : Promise<[IArticle]> => {
    const URL = GET_NEWS_URL + "&domains=wsj.com" +"&q="+searchKey;
    const {articles} = await callAPI(URL , "GET");
    return articles;
}