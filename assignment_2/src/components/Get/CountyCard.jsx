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

// // const content = CountryData.map((ob, i) => {       return (
//     <DetailedCard
//     key={ob.Date}
//     confirmed={ob.Confirmed}
//     deaths={ob.Deaths}
//     recovered={ob.Recovered}
//     active={ob.Active}
//      date={ob.Date}
//      day={i + 1}         />       );     });
// // 10:22 PM
