import React from "react";

import hero from "../../assets/hero-img.jpg"
import "./Home.css"

function Home() {
  return (
    <section id="Home">
      <div className="container">
        <div className="row">
          <div className="hero-section">
            <h2>PowerHouse electricals and <br />electronics shop</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              expedita maxime <br /> hic, velit officia minus. <br />
              <button><h4>View Catalogue</h4></button>
            </p>

            <img src={hero} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
