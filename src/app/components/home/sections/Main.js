import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <section className="MainSection">
        <div className="grad" />
        <h1>
          let’s build a <span className="orangeText">society</span> with skilled
          individuals
        </h1>
        <p>
          <span className="orangeText">Utthan</span> works to build this society
          of our dreams
        </p>
        <span>
          <button className="donate">Donate</button>
          <button className="learnmore">Learn More</button>
        </span>
      </section>
    );
  }
}

export default Main;
