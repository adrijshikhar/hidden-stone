import React, { Component } from "react";
import arrowRight from "../../../images/arrow-right.svg";
class AboutUs extends Component {
  render() {
    return (
      <section className="section AboutUsSection activeSection" id="aboutus">
        <h1>
          <span className="orange-text">the</span> challenge
        </h1>
        <p>
          We believe that society can only thrive when every individual is given
          a chance to contribute. However, due to issues such as poverty and
          umeployment, a part of society is left out. The rural areas are
          currently in despair, and the ongoing solutions aren’t just enough.
        </p>
        <p>
          <span className="orange-text">Utthan</span> is an NGO which works to
          enhance the current scenario.{" "}
        </p>
        <button className="viewMore" id="aboutUsInfo">
          view more
          <img src={arrowRight} />
        </button>
      </section>
    );
  }
}

export default AboutUs;
