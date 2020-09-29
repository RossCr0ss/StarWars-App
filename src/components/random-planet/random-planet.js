import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/SwapiService";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet() {
    const id = 10;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const {
      planet: {
        id,
        name,
        population,
        diameter,
        rotation_period,
        gravity,
        climate,
        terrain,
        surface_water,
      },
    } = this.state;
    return (
      <section className="random-planet">
        <div className="random-planet-image">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            className="responsive-img"
            alt="planet-img"
          />
        </div>
        <ul className="random-planet-list">
          <li className="random-planet-list-item strong">
            <span>Name:</span>
            {name}
          </li>
          <li className="random-planet-list-item">
            <span>Popultion:</span> {population}
          </li>
          <li className="random-planet-list-item">
            <span>Diameter:</span>
            {diameter}
          </li>
          <li className="random-planet-list-item">
            <span>Rotation period:</span>
            {rotation_period}
          </li>
          <li className="random-planet-list-item">
            <span>Gravity:</span>
            {gravity}
          </li>
          <li className="random-planet-list-item">
            <span>Climate:</span>
            {climate}
          </li>
          <li className="random-planet-list-item">
            <span>Terrain:</span>
            {terrain}
          </li>
          <li className="random-planet-list-item">
            <span>Surface Water:</span>
            {surface_water}
          </li>
          {/*  <li className="random-planet-list-item">
            Residents: {this.state.residents}
          </li>
          <li className="random-planet-list-item">Films: {this.state.films}</li> */}
        </ul>
      </section>
    );
  }
}
