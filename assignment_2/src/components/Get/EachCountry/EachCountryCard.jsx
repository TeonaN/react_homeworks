import React from "react";

function EachCountyCard({ country, recovered}) {
  return (
    <div>
      <h3>{country}</h3>
      <p>Recovered: {recovered}</p>
      <p>Active</p>
      <p>Critical</p>
    </div>
  );
}

export default EachCountyCard;
