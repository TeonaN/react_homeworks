import React, { useState } from "react";
import EachCountyCard from "./EachCountryCard";

const EachCounty = ({}) => {
  return (
    <div>
      <EachCountyCard
        active={countryData.active}
        recovered={countryData.recovered}
        critical={countryData.critical}
      />
    </div>
  );
};

export default EachCounty;
