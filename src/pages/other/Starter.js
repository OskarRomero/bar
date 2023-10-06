import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import "../../components/layout-parallax.css";

const Starter = () => {
  return (
    <>
      <h1>hello helloosjdaflj</h1>
      <br />

      <div className="index-parallax-container">
        <Parallax pages={4}>
          <ParallaxLayer speed={1}>
            <h2 style={{ color: "black" }}>First Layer</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <h2 style={{ color: "black" }}>Second Layer</h2>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Starter;
