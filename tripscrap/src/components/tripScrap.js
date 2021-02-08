import React, { useState, Component } from "react";
import Data from "../components/Data";

function TripScrap() {
  const initialState = {
    tripScrapName: '', 
    whereAreYouGoing: '', 
    todoList: '', 
};
  const [data, setData] = useState(initialState);

  const onClick = (e) => {
    e.preventDefault();
    console.log("button clicked");
  };

  return <h1>data</h1>;
}

export default TripScrap;
