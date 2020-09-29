import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        
          <a href="#default" className="logo">
            StarWars App
          </a>
          <div className="header-right">
            <a className="active" href="#home">
              People
            </a>
            <a href="#contact">Planets</a>
            <a href="#about">Starships</a>
          </div>
      
      </div>
    );
  }
}
