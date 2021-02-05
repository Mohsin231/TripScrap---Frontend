import React, { useState, Component } from "react";
import Data from "../components/data";

function TripScrap() {
  const [data, setData] = useState([]);

  const onClick = (e) => {
    e.preventDefault();
    console.log("button clicked");
  };

  return <h1>data</h1>;
}

export default TripScrap;
