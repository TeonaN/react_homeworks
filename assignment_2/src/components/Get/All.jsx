import React, { useState, useEffect } from "react";
import axios from "axios";

function All() {
  const [GlobalData, setGlobalData] = useState([]);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/all")
      .then((response) => {
        setGlobalData(response.data);
      })
      .catch((err) => {
        console.error("[All.jsx]", err.message);
      });
  }, []);

  return (
    <div>
      <p> Today Deaths: {GlobalData.todayDeaths} </p>
    </div>
  );
}

export default All;
