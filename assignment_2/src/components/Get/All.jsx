import React, { useState, useEffect } from "react";
import axios from "axios";

function All() {
  const [global, setGlobal] = useState([]);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/all")
      .then((response) => {
        setGlobal(response.data);
      })
      .catch((err) => {
        console.error("[All.jsx]", err.message);
      });
  }, []);

  const style = {
    fontWeight: "bold",
  };
  return (
    <div className="row flex-column">
      <h1 style={style}>Global Data</h1>
      <p> Today Cases: {global.todayCases} </p>
      <p> Today Deaths: {global.todayDeaths} </p>
      <p> Recovered: {global.recovered} </p>
      <p> Active: {global.active} </p>
      <p> Critical: {global.critical} </p>
    </div>
  );
}

export default All;
