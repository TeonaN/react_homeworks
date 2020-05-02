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
        setGlobalData(response.data.slice(0, 15));
        console.log(response.data.slice(0, 15));
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
          recovered={ob.recovered}
          flag={ob.countryInfo.flag}
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

export default Countries;

