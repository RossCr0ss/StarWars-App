import React, { Component } from "react";
import Header from "../header";
import ItemList from "../item-list/item-list";
import RandomPlanet from "../random-planet";
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <RandomPlanet />
          <ItemList />
        </div>
      </div>
    );
  }
}
