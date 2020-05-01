import React, { useState, useEffect } from "react";
import axios from "axios";
import EachCounty from "./EachCountry";

function Select() {
  const [countries, setCountries] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/countries?sort=country")
      .then((response) => {
        setCountries(response.data);

      })
      .catch((err) => {
        console.error("[Select.jsx]", err.message);
      });
  }, []);

  function handleChange  (countryId) {
    setId(countryId);
  };
  const options = countries.map((ob,i) => {
    return (
      <option key={ob.countryInfo.iso3+i} value={ob.countryInfo.iso3}>
        {ob.country}
      </option>
    );
  });

  return (
    <div>
      <select defaultValue="" onChange={(e) => handleChange(e.target.value)}>
        {options}
      </select>
      <EachCounty countryId={id}/>
      {console.log(id)}
    </div>
  );
}

export default Select;
