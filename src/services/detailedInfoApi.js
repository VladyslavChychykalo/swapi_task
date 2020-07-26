const baseUrl = 'https://swapi.dev/api/';

export default {
  fetchDetailed(id, url) {
    return fetch(baseUrl + url + id, {
      headers: {
        Accept: 'application/json',
      },
    }).then(response => {
      return response.json();
    });
  },
};
