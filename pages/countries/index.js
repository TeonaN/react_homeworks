import React, { useState } from "react";
import CountyCard from "../../components/CountyCard";
import Layout from "../../components/layout";

const Countries = ({ globalData }) => {
  let content = null;

  content = globalData.map((ob) => {
    return (
      <div className="border rounded border-secondary w-25 mx-auto">
        {" "}
        <CountyCard
          key={ob.countryInfo._id}
          country={ob.country}
          active={ob.active}
          recovered={ob.recovered}
          critical={ob.critical}
        />{" "}
      </div>
    );
  });

  return <Layout>{content}</Layout>;
};

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://corona.lmao.ninja/v2/countries?sort=country"
  );
  const globalData = await res.json();
  return {
    props: {
      globalData: globalData.slice(0, 10),
    },
  };
}

export default Countries;
