import { Article } from "../interfaces/News";
import callAPI from "./CallAPI";
import { GET_NEWS_URL } from "./urls";


export const fetchNewsAPI = async (searchKey : string) : Promise<[Article]> => {
    const URL = GET_NEWS_URL + "&q="+searchKey;
    const {articles} = await callAPI(URL , "GET");
    return articles;
}