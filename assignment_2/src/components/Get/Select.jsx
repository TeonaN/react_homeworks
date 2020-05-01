import React, { useState, useEffect } from "react";
import axios from "axios";

function Select() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/countries?sort=country")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("[Select.jsx]", err.message);
      });
  }, []);

  const options = countries.map((ob) => {
    return <option key={ob.countryInfo._id}>{ob.country}</option>;
  });

  return (
    <div>
      <Select>
          {options}
      </Select>
    </div>
  );
}

export default Select;
