class SwapiService {

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

  getPlanet(id) {
    return this.getResource(`planets/${id}`)
  }

  getAllStarships() {
    return this.getResource('starships/')
  }

  getStarship(id) {
    return this.getResource(`starships/${id}`)
  }
}

const swapi = new SwapiService();
swapi.getAllPeople().then(body => console.log(body));
swapi.getPerson('2').then(body => console.log(body));

swapi.getAllPlanets().then(body => console.log(body));
swapi.getPlanet('2').then(body => console.log(body));

swapi.getAllStarships().then(body => console.log(body));
swapi.getStarship('2').then(body => console.log(body));