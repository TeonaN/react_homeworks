import React from "react";

function Data({ country, province, updatedAt }) {
  return (
    <div>
      <h3>{country}</h3>
      <p>Province: {province}</p>
      <p>Updated at{updatedAt}</p>
    </div>
  );
}

export default Data;
