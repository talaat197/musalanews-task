import { APIResponse } from "../interfaces/API";
import callAPI from "./CallAPI";
import { GET_NEWS_URL } from "./urls";


export const fetchNewsAPI = async (searchKey : string , page = 1) : Promise<APIResponse> => {
    const URL = GET_NEWS_URL + "&domains=wsj.com&pageSize=10&page"+page+"&q="+searchKey;
    const response : APIResponse = await callAPI(URL , "GET");
    return response;
}