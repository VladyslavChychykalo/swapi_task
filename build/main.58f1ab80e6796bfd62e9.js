(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OPH6:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("JBxO"),n("FdtR");var r={query:"",fetchPlanets:function(){var e=""+this.query;return fetch("https://swapi.dev/api/planets/?search="+e).then((function(e){return e.json()}))},get searchQuery(){return this.query},set searchQuery(e){this.query=e}},i={query:"",fetchFilms:function(){var e=""+this.query;return fetch("https://swapi.dev/api/films/?search="+e).then((function(e){return e.json()}))},get searchQuery(){return this.query},set searchQuery(e){this.query=e}},o={query:"",fetchPeople:function(){var e=""+this.query;return fetch("https://swapi.dev/api/people/?search="+e).then((function(e){return e.json()}))},get searchQuery(){return this.query},set searchQuery(e){this.query=e}},c={query:"",fetchSpecies:function(){var e=""+this.query;return fetch("https://swapi.dev/api/species/?search="+e).then((function(e){return e.json()}))},get searchQuery(){return this.query},set searchQuery(e){this.query=e}},s={query:"",fetchStarships:function(){var e=""+this.query;return fetch("https://swapi.dev/api/starships/?search="+e).then((function(e){return e.json()}))},get searchQuery(){return this.query},set searchQuery(e){this.query=e}},u={query:"",fetchVehicles:function(){var e=""+this.query;return fetch("https://swapi.dev/api/vehicles/?search="+e).then((function(e){return e.json()}))},get searchQuery(){return this.query},set searchQuery(e){this.query=e}};n("8cZI"),n("lmye"),n("Muwe");function l(e,t,n){var r=t.map((function(e){var t=/\d+/.exec(e.url);return n(e,t[0])})).join("");e.innerHTML=r}function a(e,t,n){var r=n(t);e.innerHTML=r}function p(e,t){var n=t();e.innerHTML=n}n("D/wG");function h(e,t){return"<li><p>"+e.name+"</p><button id="+t+">Show more</button></li>"}function f(e,t){return"<li><p>"+e.title+"</p><button id="+t+">Show more</button></li>"}function d(e,t){return"<li><p>"+e.name+"</p><button id="+t+">Show more</button></li>"}function v(e,t){return"<li><p>"+e.name+"</p><button id="+t+">Show more</button></li>"}function m(e,t){return"<li><p>"+e.name+"</p><button id="+t+">Show more</button></li>"}function y(e,t){return"<li><p>"+e.name+"</p><button id="+t+">Show more</button></li>"}function g(e){return"<div><h4>"+e.name+"</h4><p>population: "+e.population+"</p><p>climate: "+e.climate+"</p><p>diameter: "+e.diameter+"</p><p>terrain: "+e.terrain+"</p></div>"}function L(e){return"<div><h4>"+e.title+"</h4>description: <p>"+e.opening_crawl+"</p><p>director: "+e.director+"</p><p>release date: "+e.release_date+"</p><p>episode: "+e.episode_id+"</p></div>"}function I(e){return"<div><h4>"+e.name+"</h4><p>birth year: "+e.birth_year+"</p><p>eye color: "+e.eye_color+"</p><p>gender: "+e.gender+"</p><p>hair color: "+e.hair_color+"</p><p>height: "+e.height+"</p><p>mass: "+e.mass+"</p></div>"}function q(e){return"<div><h4>"+e.name+"</h4><p>eye colors: "+e.eye_colors+"</p><p>designation: "+e.designation+"</p><p>hair colors: "+e.hair_colors+"</p><p>average height: "+e.average_height+"</p><p>language: "+e.language+"</p></div>"}function w(e){return"<div><h4>"+e.name+"</h4><p>cargo capacity: "+e.cargo_capacity+"</p><p>cost in credits: "+e.cost_in_credits+"</p><p>crew: "+e.crew+"</p><p>length: "+e.length+"</p><p>model: "+e.model+"</p><p>manufacturer: "+e.manufacturer+"</p></div>"}function S(e){return"<div><h4>"+e.name+"</h4><p>cargo capacity: "+e.cargo_capacity+"</p><p>cost in credits: "+e.cost_in_credits+"</p><p>crew: "+e.crew+"</p><p>length: "+e.length+"</p><p>model: "+e.model+"</p><p>manufacturer: "+e.manufacturer+"</p></div>"}var k=function(e){return fetch("https://swapi.dev/api/planets/"+e,{headers:{Accept:"application/json"}}).then((function(e){return e.json()}))},B={planetInput:document.querySelector("#planetInput"),planetList:document.querySelector("#swapi-planets"),planetInfoBlock:document.querySelector(".planetDetailedInfo"),filmsInput:document.querySelector("#filmsInput"),filmsList:document.querySelector("#swapi-films"),filmsInfoBlock:document.querySelector(".filmsDetailedInfo"),peopleInput:document.querySelector("#peopleInput"),peopleList:document.querySelector("#swapi-people"),peopleInfoBlock:document.querySelector(".peopleDetailedInfo"),speciesInput:document.querySelector("#speciesInput"),speciesList:document.querySelector("#swapi-species"),speciesInfoBlock:document.querySelector(".speciesDetailedInfo"),starshipsInput:document.querySelector("#starshipsInput"),starshipsList:document.querySelector("#swapi-starships"),starshipsInfoBlock:document.querySelector(".starshipsDetailedInfo"),vehiclesInput:document.querySelector("#vehiclesInput"),vehiclesList:document.querySelector("#swapi-vehicles"),vehiclesInfoBlock:document.querySelector(".vehiclesDetailedInfo")},T=n("jffb"),Q=n.n(T);var b=function(){return'<li style="color: red;">There are no such information about this! Try another</li>'};function _(){r.fetchPlanets().then((function(e){if(0===e.results.length)return p(B.planetList,b);l(B.planetList,e.results,h)})).catch((function(e){console.log(e)}))}function E(){i.fetchFilms().then((function(e){if(0===e.results.length)return p(B.filmsList,b);console.log(e.results),l(B.filmsList,e.results,f)})).catch((function(e){console.log(e)}))}function N(){o.fetchPeople().then((function(e){if(0===e.results.length)return p(B.peopleList,b);console.log(e.results),l(B.peopleList,e.results,d)})).catch((function(e){console.log(e)}))}function H(){c.fetchSpecies().then((function(e){if(0===e.results.length)return p(B.speciesList,b);console.log(e.results),l(B.speciesList,e.results,v)})).catch((function(e){console.log(e)}))}function j(){s.fetchStarships().then((function(e){if(0===e.results.length)return p(B.starshipsList,b);console.log(e.results),l(B.starshipsList,e.results,m)})).catch((function(e){console.log(e)}))}function M(){u.fetchVehicles().then((function(e){if(0===e.results.length)return p(B.vehiclesList,b);console.log(e.results),l(B.vehiclesList,e.results,y)})).catch((function(e){console.log(e)}))}B.planetInput.addEventListener("input",Q()((function(e){var t=e.target;r.searchQuery=t.value,B.planetInfoBlock.innerHTML="",_()}),500)),_(),B.planetList.addEventListener("click",(function(e){var t=e.target;if("BUTTON"!==t.nodeName)return;k(t.id).then((function(e){a(B.planetInfoBlock,e,g)})).catch((function(e){console.log(e)}))})),B.filmsInput.addEventListener("input",Q()((function(e){var t=e.target;i.searchQuery=t.value,B.filmsInfoBlock.innerHTML="",E()}),500)),E(),B.filmsList.addEventListener("click",(function(e){var t=e.target;if("BUTTON"!==t.nodeName)return;(void 0)(t.id,"films/").then((function(e){console.log(e),a(B.filmsInfoBlock,e,L)})).catch((function(e){console.log(e)}))})),B.peopleInput.addEventListener("input",Q()((function(e){var t=e.target;o.searchQuery=t.value,B.peopleInfoBlock.innerHTML="",N()}),500)),N(),B.peopleList.addEventListener("click",(function(e){var t=e.target;if("BUTTON"!==t.nodeName)return;(void 0)(t.id,"people/").then((function(e){console.log(e),a(B.peopleInfoBlock,e,I)})).catch((function(e){console.log(e)}))})),B.speciesInput.addEventListener("input",Q()((function(e){var t=e.target;c.searchQuery=t.value,B.speciesInfoBlock.innerHTML="",H()}),500)),H(),B.speciesList.addEventListener("click",(function(e){var t=e.target;if("BUTTON"!==t.nodeName)return;(void 0)(t.id,"species/").then((function(e){console.log(e),a(B.speciesInfoBlock,e,q)})).catch((function(e){console.log(e)}))})),B.starshipsInput.addEventListener("input",Q()((function(e){var t=e.target;s.searchQuery=t.value,B.starshipsInfoBlock.innerHTML="",j()}),500)),j(),B.starshipsList.addEventListener("click",(function(e){var t=e.target;if("BUTTON"!==t.nodeName)return;(void 0)(t.id,"starships/").then((function(e){console.log(e),a(B.starshipsInfoBlock,e,w)})).catch((function(e){console.log(e)}))})),B.vehiclesInput.addEventListener("input",Q()((function(e){var t=e.target;u.searchQuery=t.value,B.vehiclesInfoBlock.innerHTML="",M()}),500)),M(),B.vehiclesList.addEventListener("click",(function(e){var t=e.target;if("BUTTON"!==t.nodeName)return;(void 0)(t.id,"vehicles/").then((function(e){console.log(e),a(B.vehiclesInfoBlock,e,S)})).catch((function(e){console.log(e)}))}));n("OPH6"),n("zrP5")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.58f1ab80e6796bfd62e9.js.map