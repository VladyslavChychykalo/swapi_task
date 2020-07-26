const basePlanetUrl = `https://swapi.dev/api/planets/?search=`;
const baseFilmsUrl = `https://swapi.dev/api/films/?search=`;
const basePeopleUrl = `https://swapi.dev/api/people/?search=`;
const baseSpeciesUrl = `https://swapi.dev/api/species/?search=`;
const baseStarshipsUrl = `https://swapi.dev/api/starships/?search=`;
const baseVehiclesUrl = `https://swapi.dev/api/vehicles/?search=`;

const planetObj = {
  query: '',
  fetchPlanets() {
    const requestParams = `${this.query}`;

    return fetch(basePlanetUrl + requestParams).then(response => {
      return response.json();
    });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
};

const filmsObj = {
  query: '',
  fetchFilms() {
    const requestParams = `${this.query}`;

    return fetch(baseFilmsUrl + requestParams).then(response => {
      return response.json();
    });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
};

const peopleObj = {
  query: '',
  fetchPeople() {
    const requestParams = `${this.query}`;

    return fetch(basePeopleUrl + requestParams).then(response => {
      return response.json();
    });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
};

const speciesObj = {
  query: '',
  fetchSpecies() {
    const requestParams = `${this.query}`;

    return fetch(baseSpeciesUrl + requestParams).then(response => {
      return response.json();
    });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
};

const starshipsObj = {
  query: '',
  fetchStarships() {
    const requestParams = `${this.query}`;

    return fetch(baseStarshipsUrl + requestParams).then(response => {
      return response.json();
    });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
};

const vehiclesObj = {
  query: '',
  fetchVehicles() {
    const requestParams = `${this.query}`;

    return fetch(baseVehiclesUrl + requestParams).then(response => {
      return response.json();
    });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
};

export {
  planetObj,
  filmsObj,
  peopleObj,
  speciesObj,
  starshipsObj,
  vehiclesObj,
};
