import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import "./Body.css";
import data from "../apiDummyData.json";

function Body() {
  const Ads = [
    {
      adUrl: "https://s0.2mdn.net/simgad/7664227881879172454",
    },
    {
      adUrl: "https://s0.2mdn.net/simgad/7664227881879172454",
    },
    {
      adUrl: "https://s0.2mdn.net/simgad/7664227881879172454",
    },
    {
      adUrl: "https://s0.2mdn.net/simgad/7664227881879172454",
    },
    {
      adUrl: "https://s0.2mdn.net/simgad/7664227881879172454",
    },
    {
      adUrl: "https://s0.2mdn.net/simgad/7664227881879172454",
    },
    {
      adUrl: "https://s0.2mdn.net/simgad/7664227881879172454",
    },
    {
      adUrl: "https://s0.2mdn.net/simgad/7664227881879172454",
    },
    {
      adUrl:
        "https://i.pinimg.com/originals/f7/85/7f/f7857f7dc8194d91da6b825d3ab90fce.gif",
    },
  ];
  return (
    <div className="Body">
      <div className="Container">
        <div className="Left-Black">
          {data &&
            data.articles.map((item) => (
              <div className="big-card1">
                <img className="cardimage" src={item.urlToImage} alt="" />
                <div className="content">
                  <h3>{item.publishedAt}</h3>
                  <br></br>
                  <a href={item.url} target="_black" className="link">
                    <h2>{item.title}</h2>
                  </a>
                  <br></br>
                  <p>{item.description}</p>
                  <br></br>
                  <span className="heart-text">
                    <AiOutlineHeart className="heart" />
                    68
                  </span>
                  <span className="comment-text">
                    <BiComment className="comment" />
                    128
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="Center-White">
          {data &&
            data.articles.map((item) => (
              <div className="small-card1">
                <div className="content">
                  <h3>{item.publishedAt}</h3>
                  <br></br>

                  <a href={item.url} target="_black" className="link">
                    <h2>{item.title}</h2>
                  </a>
                  <br></br>
                  {/* <p>{item.description}</p> */}
                  <br></br>
                  <span className="heart-text">
                    <AiOutlineHeart className="heart" />
                    68
                  </span>
                  <span className="comment-text">
                    <BiComment className="comment" />
                    128
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div className="Right-Black">
          <div className="right__container">
            {Ads.map((item) => (
              <div className="right__adCard">
                <img className="ad__img" src={item.adUrl} alt="ad" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
