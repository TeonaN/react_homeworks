import React, { useState, useEffect } from "react";
import axios from "axios";
import StateCard from "./StateCard";

function State() {
  const [stateData, setstateData] = useState([]);
  const [button, setButton] = useState(true);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/states")
      .then((response) => {
        setstateData(response.data.slice(0, 15));
      })
      .catch((err) => {
        console.error("[State.jsx]", err.message);
      });
  }, []);

  let content = null;
  if (!button) {
    content = stateData.map((ob) => {
      return (
        <StateCard
        //   key={ob.countryInfo._id}
          state={ob.state}
          cases={ob.cases}
          todayCases={ob.todayCases}
        />
      );
    });
  }

  return (
    <div>
      <button onClick={() => setButton(!button)}>ksd</button>
      {content}
    </div>
  );
}

export default State;

