import React from "react";
import { BiHeart, BiMessage } from "react-icons/bi";
import "./Hero.css";
import apiDummyData from '../apiDummyData.json'

const Hero = () => {


  const contentT = [
    {
      date: "20 September 2019",
      title: "Lorem ipsum,  ada ad ad dolor sit amet consectetur adipisicing.",
      imgURL: "https://images.pexels.com/photos/2883057/pexels-photo-2883057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      date: "20 September 2019",
      title: "Lorem ipsum,  ada ad ad dolor sit amet consectetur adipisicing.",
      imgURL: "https://images.pexels.com/photos/4069091/pexels-photo-4069091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },  
  ]

  const contentB = [
    {
      date: "20 September 2019",
      title: "Lorem ipsum,  ada ad ad dolor sit amet consectetur adipisicing.",
      imgURL: "https://images.pexels.com/photos/1486188/pexels-photo-1486188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      date: "20 September 2019",
      title: "Lorem ipsum,  ada ad ad dolor sit amet consectetur adipisicing.",
      imgURL: "https://images.pexels.com/photos/2248503/pexels-photo-2248503.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
  ]
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__mainCard">
            <div className="hero__mainCardContent">
              <p className="hero__date">
                20 September 2019
              </p>
              <h1 className="hero__heading">
                Lorem ipsum,  ada ad ad dolor sit amet consectetur adipisicing.
              </h1>
              <div className="hero__icons">
                <span><BiHeart className="hero__icon"/> 200</span>
                <span><BiMessage className="hero__icon"/> 20</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__rightCards">
            <div className="hero__topCards">

              {
                contentT.map((item, __i__) => (
                  <div className="hero__topCard card__pB">
                    <div className="hero__cardContent1" style={{backgroundImage: `url(${item.imgURL})`}}>
                      <p className="hero__date">
                        {item.date}
                      </p>
                      <h1 className="hero__heading">
                        {item.title}
                      </h1>
                      <div className="hero__icons">
                        <span><BiHeart className="hero__icon"/> 200</span>
                        <span><BiMessage className="hero__icon"/> 20</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="hero__topCards">

              {
                contentB.map(item => (
                  <div className="hero__topCard card__pT">
                    <div className="hero__cardContent1" style={{backgroundImage: `url(${item.imgURL})`}}>
                      <p className="hero__date">
                        {item.date}
                      </p>
                      <h1 className="hero__heading">
                        {item.title}
                      </h1>
                      <div className="hero__icons">
                        <span><BiHeart className="hero__icon"/> 200</span>
                        <span><BiMessage className="hero__icon"/> 20</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
