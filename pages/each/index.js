import React, { useState } from "react";

const Select = ({ countries }) => {
  const [id, setId] = useState("");
  function handleChange(countryId) {
    setId(countryId);
  }
  const options = countries.map((ob, i) => {
    return (
      <option key={ob.countryInfo.iso3 + i} value={ob.countryInfo.iso3}>
        {ob.country}
      </option>
    );
  });

  return (
    <div>
      <select
        class="custom-select"
        id="inputGroupSelect01"
        defaultValue=""
        onChange={(e) => handleChange(e.target.value)}
      >
        {options}
      </select>
      <EachCountry countryId={id} />
      {console.log(id)}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://corona.lmao.ninja/v2/countries?sort=country"
  );
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
}

export default Select;
