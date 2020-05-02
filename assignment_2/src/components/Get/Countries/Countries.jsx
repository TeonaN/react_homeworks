import React, { useState, useEffect } from "react";
import axios from "axios";
import CountyCard from "./CountyCard";

function Countries() {
  const [GlobalData, setGlobalData] = useState([]);
  const [button, setButton] = useState(true);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/countries?sort=country")
      .then((response) => {
        setGlobalData(response.data.slice(0, 10));
      })
      .catch((err) => {
        console.error("[Countries.jsx]", err.message);
      });
  }, []);

  let content = null;
  if (!button) {
    content = GlobalData.map((ob) => {
      return (
        <CountyCard
          key={ob.countryInfo._id}
          country={ob.country}
          active={ob.active}
          recovered={ob.recovered}
          critical={ob.critical}
        />
      );
    });
  }

  return (
    <div>
      <button
        className="btn btn-danger mr-3"
        onClick={() => setButton(!button)}
      >
        Countries
      </button>
      {content}
    </div>
  );
}

export default Countries;
