import { APIResponse } from "../interfaces/API";
import i18n from "../lang/initLang";
import callAPI from "./CallAPI";
import { GET_NEWS_URL } from "./urls";


export const fetchNewsAPI = async (searchKey : string , page = 1) : Promise<APIResponse> => {
    const lang = i18n.language;
    const URL = GET_NEWS_URL + "&domains=techcrunch.com,thenextweb.com,engadget.com,wsj.com&pageSize=10&language="+lang+"&page"+page+"&q="+searchKey;
    console.info(URL , "url with search")
    const response : APIResponse = await callAPI(URL , "GET");
    return response;
}