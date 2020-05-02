import React from "react";

function CountyCard({  country, recovered,active,critical}) {
  return (
    <div>
      <h3>{country}</h3>
      <p>Recovered {recovered}</p>
      <p>Active {active}</p>
      <p>Critical {critical}</p>
    </div>
  );
}

export default CountyCard;

