export default class SwapiService {

    _apiLink = 'https://swapi.dev/api/';
  
    async getResource(url) {
      const res = await fetch(`${this._apiLink}${url}`);
  
      if (!res.ok) {
        throw new Error((`Could not found ${url}, received error ${res.status}`))
      }
  
      return await res.json();
    }
  
    getAllPeople() {
      return this.getResource('people/')
    }
  
    getPerson(id) {
      return this.getResource(`people/${id}`)
    }
  
    getAllPlanets() {
      return this.getResource('planets/')
    }
  
    async getPlanet(id) {
      const planet = await this.getResource(`planets/${id}`);
      return this._transformPlanet(planet);
    }
  
    getAllStarships() {
      return this.getResource('starships/')
    }
  
    getStarship(id) {
      return this.getResource(`starships/${id}`)
    }

    _extractID(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
      return {
        id: this._extractID(planet),
        name: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        rotation_period: planet.rotation_period,
        gravity: planet.gravity,
        climate: planet.climate,
        terrain: planet.terrain,
        surface_water: planet.surface_water,
      }
    }
  }
