import React, { useState, useEffect } from 'react';

function Destination(props) {

  
  const [destData, setDestData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function getDestData(event) {
    const url = "http://localhost:3001/";
    fetch(url)
      .then((res) => res.json(event.target.value))
      .then((data) => setDestData(data))
      .then(
        (result) => {
          setIsLoading(true);
          setDestData(result);
        },
        (err) => {
          setIsLoading(true);
          setError(error);
        }
      );
  }

  const onClick = (e) => {
    e.preventDefault();
    setDestData(destData);
  }

  useEffect(
    (event) => {
      event.stopPropogation();
      getDestData();
    },
    [getDestData, ...destData.map((item) => item.id)]
  );

  return (
    <h1>{props.name}</h1>

  )
}

export default Destination;