import { APIResponse } from "../interfaces/API";

const callAPI = (URL: string, method: string, dataBody?: Object) : Promise<any> => {
  return new Promise((resolve, reject) => {
    const bodyData: Object = dataBody ? {body: JSON.stringify(dataBody)} : {};

    const headers: HeadersInit_ = {'Content-Type': 'application/json'};

    const options: RequestInit = {method, ...bodyData, headers};

    fetch(URL, options)
      .then(resp => resp.json()).then((response : APIResponse) => {
        if (response.status === "ok") {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export default callAPI;
