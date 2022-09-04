import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__mainCard">Main Card</div>
        </div>
        <div className="hero__right">
          <div className="hero__rightCards">
            <div className="hero__topCards">
              <div className="hero__topCard card__pB">
                <div className="hero__cardContent1">yes</div>
              </div>
              <div className="hero__topCard card__pB">
                <div className="hero__cardContent1">yes</div>
              </div>
            </div>
            <div className="hero__topCards">
              <div className="hero__topCard card__pT">
                <div className="hero__cardContent2">yes</div>
              </div>
              <div className="hero__topCard card__pT">
                <div className="hero__cardContent2">yes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
