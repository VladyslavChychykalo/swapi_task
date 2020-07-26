function allPlanets(item, index) {
  return `<li><p>${item.name}</p><button id=${index}>Show more</button></li>`;
}

function allFilms(item, index) {
  return `<li><p>${item.title}</p><button id=${index}>Show more</button></li>`;
}

function allNames(item, index) {
  return `<li><p>${item.name}</p><button id=${index}>Show more</button></li>`;
}

function allSpecies(item, index) {
  return `<li><p>${item.name}</p><button id=${index}>Show more</button></li>`;
}

function allStarships(item, index) {
  return `<li><p>${item.name}</p><button id=${index}>Show more</button></li>`;
}

function allVehicles(item, index) {
  return `<li><p>${item.name}</p><button id=${index}>Show more</button></li>`;
}

export {
  allPlanets,
  allFilms,
  allNames,
  allSpecies,
  allStarships,
  allVehicles,
};
