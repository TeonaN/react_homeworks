import React from "react";

function CountyCard({ country, recovered, flag }) {
  return (
    <div>
      <h3>{country}</h3>
      <p>Cases:3</p>
      <p>Recovered: {recovered}</p>
      <p>Active</p>
      <p>Critical</p>
      <img scr={flag} />
    </div>
  );
}

export default CountyCard;

