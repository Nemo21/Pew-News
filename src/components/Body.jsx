import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import "./Body.css";
import data from '../apiDummyData.json'

function Body() {
  return (
    <div className="Body">
      <div className="Container">
        <div className="Left-Black">

          {
           data && data.articles.map((item) => (

            <div className="big-card1">
              <img
                className="cardimage"
                src={item.urlToImage}
                alt=""
              />
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
           )) 
          }
          
        </div>
        <div className="Center-White">

        {
           data && data.articles.map((item) => (

            <div className="small-card1">
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
           )) 
          }
          
          
        </div>
        <div className="Right-Black">
          <div className="small-card1">
            <div className="content">
              <h3>Topic,Date</h3>
              <br></br>
              <h2>Heading</h2>
              <br></br>
              <p>Information</p>
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
          <div className="small-card1">
            <div className="content">
              <h3>Topic,Date</h3>
              <br></br>
              <h2>Heading</h2>
              <br></br>
              <p>Information</p>
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
          <div className="small-card1">
            <div className="content">
              <h3>Topic,Date</h3>
              <br></br>
              <h2>Heading</h2>
              <br></br>
              <p>Information</p>
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
          <div className="small-card1">
            <div className="content">
              <h3>Topic,Date</h3>
              <br></br>
              <h2>Heading</h2>
              <br></br>
              <p>Information</p>
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
          <div className="content">
            <h3>Topic,Date</h3>
            <br></br>
            <h2>Heading</h2>
            <br></br>
            <p>Information</p>
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
          <div className="content">
            <h3>CAPSs 12.09.3444</h3>
            <br></br>
            <h2>asffmci j iemc akk oenfmmci jjevnpemm dnefnnai</h2>
            <br></br>
            <p>
              Use the opacity property to add transparency to a button (creates
              a "disabled" look). Tip: You can also add the cursor property with
              a value of "not-allowed", which will display a "no parking sign"
              when you mouse over the button:
            </p>
            <br></br>
            <span className="heart-text">
              <AiOutlineHeart className="heart" />
              68
            </span>
            <span className="comment-text">
              <BiComment className="comment" />
              128
            </span>
            <button className="moreconvo">More Conversation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
