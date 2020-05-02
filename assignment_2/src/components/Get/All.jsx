import React, { useState, useEffect } from "react";
import axios from "axios";

function All() {
  const [global, setGlobal] = useState([]);
  const [button, setButton] = useState(true);
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

  // return (
  //   <div>
  //     <p> Today Cases: {global.todayCases} </p>
  //     <p> Today Deaths: {global.todayDeaths} </p>
  //     <p> Recovered: {global.recovered} </p>
  //     <p> Active: {global.active} </p>
  //     <p> Critical: {global.critical} </p>
  //   </div>
  // );




  return (
    <div className="row flex-column">
      <p> Today Cases: {global.todayCases} </p>
      <p> Today Deaths: {global.todayDeaths} </p>
      <p> Recovered: {global.recovered} </p>
      <p> Active: {global.active} </p>
      <p> Critical: {global.critical} </p>
    </div>
  );
}

export default All;
