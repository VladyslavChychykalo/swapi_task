import * as swapiApi from '../services/allInfoApi';
import * as renderInfo from './render';
import * as templateAllInfo from '../templates/templateAllinfo';
import * as templateDetailedInfo from '../templates/templateDetailedInfo';
// import fetchDetailedInfo from '../services/detailedInfoApi';
import * as fetchDetailedInfo from '../services/detailedInfoApi';
import refs from './refs';
import debounce from 'lodash.debounce';
import errorNoteficationTemplate from '../templates/templateError';

// ========================================== Planets ================================

refs.planetInput.addEventListener('input', debounce(searchPlanets, 500));

function searchPlanets({ target }) {
  swapiApi.planetObj.searchQuery = target.value;
  refs.planetInfoBlock.innerHTML = '';
  fetchPlanets();
}

function fetchPlanets() {
  swapiApi.planetObj
    .fetchPlanets()
    .then(data => {
      if (data.results.length === 0) {
        return renderInfo.renderError(
          refs.planetList,
          errorNoteficationTemplate,
        );
      }

      renderInfo.renderAllInfo(
        refs.planetList,
        data.results,
        templateAllInfo.allPlanets,
      );
    })
    .catch(err => {
      console.log(err);
    });
}

fetchPlanets();

refs.planetList.addEventListener('click', takePlanetInfo);

function takePlanetInfo({ target }) {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  fetchDetailedInfo.planetDetailedObj
    .fetchDetailed(target.id)
    .then(data => {
      renderInfo.renderDetailedInfo(
        refs.planetInfoBlock,
        data,
        templateDetailedInfo.planetInfo,
      );
    })
    .catch(err => {
      console.log(err);
    });

  // fetchDetailedInfo
  //   .fetchDetailed(target.id, 'planets/')
  //   .then(data => {
  //     renderInfo.renderDetailedInfo(
  //       refs.planetInfoBlock,
  //       data,
  //       templateDetailedInfo.planetInfo,
  //     );
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

// ========================================== Films ================================

refs.filmsInput.addEventListener('input', debounce(searchFilms, 500));

function searchFilms({ target }) {
  swapiApi.filmsObj.searchQuery = target.value;
  refs.filmsInfoBlock.innerHTML = '';
  fetchFilms();
}

function fetchFilms() {
  swapiApi.filmsObj
    .fetchFilms()
    .then(data => {
      if (data.results.length === 0) {
        return renderInfo.renderError(
          refs.filmsList,
          errorNoteficationTemplate,
        );
      }

      console.log(data.results);

      renderInfo.renderAllInfo(
        refs.filmsList,
        data.results,
        templateAllInfo.allFilms,
      );
    })
    .catch(err => {
      console.log(err);
    });
}
fetchFilms();

refs.filmsList.addEventListener('click', takeFilmInfo);

function takeFilmInfo({ target }) {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  fetchDetailedInfo
    .fetchDetailed(target.id, 'films/')
    .then(data => {
      console.log(data);
      renderInfo.renderDetailedInfo(
        refs.filmsInfoBlock,
        data,
        templateDetailedInfo.filmsInfo,
      );
    })
    .catch(err => {
      console.log(err);
    });
}

// ========================================== People ================================

refs.peopleInput.addEventListener('input', debounce(searchPeople, 500));

function searchPeople({ target }) {
  swapiApi.peopleObj.searchQuery = target.value;
  refs.peopleInfoBlock.innerHTML = '';
  fetchPeople();
}

function fetchPeople() {
  swapiApi.peopleObj
    .fetchPeople()
    .then(data => {
      if (data.results.length === 0) {
        return renderInfo.renderError(
          refs.peopleList,
          errorNoteficationTemplate,
        );
      }

      console.log(data.results);

      renderInfo.renderAllInfo(
        refs.peopleList,
        data.results,
        templateAllInfo.allNames,
      );
    })
    .catch(err => {
      console.log(err);
    });
}
fetchPeople();

refs.peopleList.addEventListener('click', takePeopleInfo);

function takePeopleInfo({ target }) {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  fetchDetailedInfo
    .fetchDetailed(target.id, 'people/')
    .then(data => {
      console.log(data);
      renderInfo.renderDetailedInfo(
        refs.peopleInfoBlock,
        data,
        templateDetailedInfo.peopleInfo,
      );
    })
    .catch(err => {
      console.log(err);
    });
}

// ========================================== Species ================================

refs.speciesInput.addEventListener('input', debounce(searchSpecies, 500));

function searchSpecies({ target }) {
  swapiApi.speciesObj.searchQuery = target.value;
  refs.speciesInfoBlock.innerHTML = '';
  fetchSpecies();
}

function fetchSpecies() {
  swapiApi.speciesObj
    .fetchSpecies()
    .then(data => {
      if (data.results.length === 0) {
        return renderInfo.renderError(
          refs.speciesList,
          errorNoteficationTemplate,
        );
      }

      console.log(data.results);

      renderInfo.renderAllInfo(
        refs.speciesList,
        data.results,
        templateAllInfo.allSpecies,
      );
    })
    .catch(err => {
      console.log(err);
    });
}
fetchSpecies();

refs.speciesList.addEventListener('click', takeSpeciesInfo);

function takeSpeciesInfo({ target }) {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  fetchDetailedInfo
    .fetchDetailed(target.id, 'species/')
    .then(data => {
      console.log(data);
      renderInfo.renderDetailedInfo(
        refs.speciesInfoBlock,
        data,
        templateDetailedInfo.speciesInfo,
      );
    })
    .catch(err => {
      console.log(err);
    });
}

// ========================================== Starships ================================

refs.starshipsInput.addEventListener('input', debounce(searchStarships, 500));

function searchStarships({ target }) {
  swapiApi.starshipsObj.searchQuery = target.value;
  refs.starshipsInfoBlock.innerHTML = '';
  fetchStarships();
}

function fetchStarships() {
  swapiApi.starshipsObj
    .fetchStarships()
    .then(data => {
      if (data.results.length === 0) {
        return renderInfo.renderError(
          refs.starshipsList,
          errorNoteficationTemplate,
        );
      }

      console.log(data.results);

      renderInfo.renderAllInfo(
        refs.starshipsList,
        data.results,
        templateAllInfo.allStarships,
      );
    })
    .catch(err => {
      console.log(err);
    });
}
fetchStarships();

refs.starshipsList.addEventListener('click', takeStarshipsInfo);

function takeStarshipsInfo({ target }) {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  fetchDetailedInfo
    .fetchDetailed(target.id, 'starships/')
    .then(data => {
      console.log(data);
      renderInfo.renderDetailedInfo(
        refs.starshipsInfoBlock,
        data,
        templateDetailedInfo.starshipsInfo,
      );
    })
    .catch(err => {
      console.log(err);
    });
}

// ========================================== Vehicles ================================

refs.vehiclesInput.addEventListener('input', debounce(searchVehicles, 500));

function searchVehicles({ target }) {
  swapiApi.vehiclesObj.searchQuery = target.value;
  refs.vehiclesInfoBlock.innerHTML = '';
  fetchVehicles();
}

function fetchVehicles() {
  swapiApi.vehiclesObj
    .fetchVehicles()
    .then(data => {
      if (data.results.length === 0) {
        return renderInfo.renderError(
          refs.vehiclesList,
          errorNoteficationTemplate,
        );
      }

      console.log(data.results);

      renderInfo.renderAllInfo(
        refs.vehiclesList,
        data.results,
        templateAllInfo.allVehicles,
      );
    })
    .catch(err => {
      console.log(err);
    });
}
fetchVehicles();

refs.vehiclesList.addEventListener('click', takeVehiclesInfo);

function takeVehiclesInfo({ target }) {
  if (target.nodeName !== 'BUTTON') {
    return;
  }

  fetchDetailedInfo
    .fetchDetailed(target.id, 'vehicles/')
    .then(data => {
      console.log(data);
      renderInfo.renderDetailedInfo(
        refs.vehiclesInfoBlock,
        data,
        templateDetailedInfo.vehiclesInfo,
      );
    })
    .catch(err => {
      console.log(err);
    });
}
