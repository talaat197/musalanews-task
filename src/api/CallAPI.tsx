const callAPI = (URL: string, method: string, dataBody?: Object) => {
  return new Promise((resolve, reject) => {
    const bodyData: Object = dataBody ? {body: JSON.stringify(dataBody)} : {};

    const headers: HeadersInit_ = {'Content-Type': 'application/json'};

    const options: RequestInit = {method, ...bodyData, headers};

    fetch(URL, options)
      .then(resp => resp.json().then(data => ({code: resp.status, body: data})))
      .then(response => {
        if (response.code > 300) {
          reject(response);
        } else {
          resolve(response.body);
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export default callAPI;
