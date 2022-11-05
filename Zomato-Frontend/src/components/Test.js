import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [news, setNews] = useState([]);
  const yoo = () => {
    axios.get("/api/get-meal-type ").then((res) => {
      console.log(res);
      setNews(res);
    });
  };

  return (
    <div>
      <button onClick={yoo}>get axios</button>
    </div>
  );
};

export default Test;
