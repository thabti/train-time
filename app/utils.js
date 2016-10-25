import isomorphicfetch from 'isomorphic-fetch';
export function fetch(url, options = {}) {

  return isomorphicfetch(url, options)
  .then((response) => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }

    if(options.json) {
      return response.json();
    }else{
      return response.text();
    }
  })
  .catch((response) => {
    console.log('Http Error', response.message);
    return Promise.reject(errorLog);
  });
}
