import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./TwitterEx.css";
import like from "../images/like.png";
import disLike from "../images/dislike.png";

function TwitterEx() {
  const [name, setName] = useState("User");

  const [count, setCount] = useState("");

  const [content, setContent] = useState([]);

  const [activeLike, setActiveLike] = useState(false);

  const [activeDislike, setActiveDislike] = useState(false);

  const handleLikeClick = () => {
    setActiveLike(!activeLike);
  };

  const handleDislikeClick = () => {
    setActiveDislike(!activeDislike);
  };

  const nameHandler = () => {
    let enteredName = prompt("Enter your Username below:");
    setName(enteredName);
  };

  const handleInputChange = (e) => {
    setCount(e.target.value);
  };

  const submitTweet = (e) => {
    e.preventDefault();
    setContent([...content, count]);
    setCount("");
    alert("Tweet Submitted");
  };

  return (
    <div>
      <div className="topDiv">
        <button className="refreshBtn" onClick={nameHandler}>
          Refresh
        </button>

        <div className="titleDiv">
          <p className="topTitle">Twitter Lite</p>
        </div>
      </div>

      <div className="submitDiv">
        <div className="nameDiv">
          <p className="nameTitle">Hello, {name}</p>
        </div>
        <p className="textP">Enter your text below:</p>
        <textarea
          value={count}
          type="text"
          id="tweetTextBox"
          onChange={handleInputChange}
        />
        <br />
        <ol className="icon-list">
          <li className="textLength">Characters: {count.length}</li>
          <li
            className="likeBtn"
            onClick={handleLikeClick}
            style={{
              backgroundColor: activeLike ? "#100C08" : "cadetblue",
              border: activeLike ? "none" : "1px solid cadetblue",
              borderRadius: activeLike ? "100%" : "100%",
            }}
          >
            <img src={like} alt="" srcset="" />
          </li>
          <li
            className="dislikeBtn"
            onClick={handleDislikeClick}
            style={{
              backgroundColor: activeDislike ? "#100C08" : "cadetblue",
              border: activeDislike ? "none" : "1px solid cadetblue",
              borderRadius: activeDislike ? "100%" : "100%",
            }}
          >
            <img src={disLike} alt="" srcset="" />
          </li>
        </ol>
        <br />
        <br />
        <br />
        <br />
        <button className="submitBtn" onClick={submitTweet}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default TwitterEx;
