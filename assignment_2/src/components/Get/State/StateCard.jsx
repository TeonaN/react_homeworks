import React from "react";

function StateCard({ state, cases, todayCases }) {
  return (
    <div>
      <h3>{state}</h3>
      <p>Cases:{cases}</p>
      <p>Today Cases: {todayCases}</p>
    </div>
  );
}

export default StateCard;

