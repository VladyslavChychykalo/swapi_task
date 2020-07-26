// const baseUrl = 'https://swapi.dev/api/';

export default {
  fetchDetailed(id, url) {
    return fetch('https://swapi.dev/api/' + url + id, {
      headers: {
        Accept: 'application/json',
      },
    }).then(response => {
      return response.json();
    });
  },
};
