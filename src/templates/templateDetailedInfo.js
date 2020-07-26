function planetInfo(item) {
  return `<div><h4>${item.name}</h4><p>population: ${item.population}</p><p>climate: ${item.climate}</p><p>diameter: ${item.diameter}</p><p>terrain: ${item.terrain}</p></div>`;
}

function filmsInfo(item) {
  return `<div><h4>${item.title}</h4>description: <p>${item.opening_crawl}</p><p>director: ${item.director}</p><p>release date: ${item.release_date}</p><p>episode: ${item.episode_id}</p></div>`;
}

function peopleInfo(item) {
  return `<div><h4>${item.name}</h4><p>birth year: ${item.birth_year}</p><p>eye color: ${item.eye_color}</p><p>gender: ${item.gender}</p><p>hair color: ${item.hair_color}</p><p>height: ${item.height}</p><p>mass: ${item.mass}</p></div>`;
}

function speciesInfo(item) {
  return `<div><h4>${item.name}</h4><p>eye colors: ${item.eye_colors}</p><p>designation: ${item.designation}</p><p>hair colors: ${item.hair_colors}</p><p>average height: ${item.average_height}</p><p>language: ${item.language}</p></div>`;
}

function starshipsInfo(item) {
  return `<div><h4>${item.name}</h4><p>cargo capacity: ${item.cargo_capacity}</p><p>cost in credits: ${item.cost_in_credits}</p><p>crew: ${item.crew}</p><p>length: ${item.length}</p><p>model: ${item.model}</p><p>manufacturer: ${item.manufacturer}</p></div>`;
}

function vehiclesInfo(item) {
  return `<div><h4>${item.name}</h4><p>cargo capacity: ${item.cargo_capacity}</p><p>cost in credits: ${item.cost_in_credits}</p><p>crew: ${item.crew}</p><p>length: ${item.length}</p><p>model: ${item.model}</p><p>manufacturer: ${item.manufacturer}</p></div>`;
}

export {
  planetInfo,
  filmsInfo,
  peopleInfo,
  speciesInfo,
  starshipsInfo,
  vehiclesInfo,
};
