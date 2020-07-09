import React, { useState } from "react";
import StateCard from "../../components/StateCard";
import Layout from "../../components/layout";

const State = ({ stateData }) => {
  let content = null;

  content = stateData.map((ob) => {
    return (
      <div className="border rounded border-secondary w-25 mx-auto">
        <StateCard
          state={ob.state}
          cases={ob.cases}
          todayCases={ob.todayCases}
        />
      </div>
    );
  });

  return <Layout>{content}</Layout>;
};

export async function getServerSideProps(context) {
  const res = await fetch("https://corona.lmao.ninja/v2/states");
  const stateData = await res.json();

  return {
    props: {
      stateData: stateData.slice(0, 10),
    },
  };
}

export default State;
