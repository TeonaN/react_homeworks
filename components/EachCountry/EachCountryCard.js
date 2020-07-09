import React from "react";

function EachCountyCard({ country, recovered, active, critical }) {
  return (
    <div>
      <p>Recovered {recovered}</p>
      <p>Active {active}</p>
      <p>Critical {critical}</p>
    </div>
  );
}

export default EachCountyCard;
