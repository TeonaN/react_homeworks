import React, { useState, useEffect } from "react";
import axios from "axios";
import EachCountyCard from "./EachCountryCard";

function EachCounty({ countryId }) {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://corona.lmao.ninja/v2/countries/${countryId}`)
      .then((response) => {
        setCountryData(response.data);

        console.log(response.data);
      })
      .catch((err) => {
        console.error("[EachCountry.jsx]", err.message);
      });
  }, [countryId]);

  return (
    <div>
      <EachCountyCard
        active={countryData.active}
        recovered={countryData.recovered}
        critical={countryData.critical}
      />
    </div>
  );
}

export default EachCounty;
