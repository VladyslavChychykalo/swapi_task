// const baseUrl = 'https://swapi.dev/api/planets/';

// export default {
//   fetchDetailed(id, url) {
//     return fetch(baseUrl + url + id, {
//       headers: {
//         Accept: 'application/json',
//       },
//     }).then(response => {
//       return response.json();
//     });
//   },
// };

const planetDetailedObj = {
  fetchDetailed(id = '') {
    return fetch(`https://swapi.dev/api/planets/${id}/.json`, {
      headers: {
        Accept: 'application/json',
      },
    }).then(response => {
      return response.json();
    });
  },
};

export { planetDetailedObj };
