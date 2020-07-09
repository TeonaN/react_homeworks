import React, { useState } from "react";
import Data from "../../components/Data";
import Layout from "../../components/layout";

const JohnHopkins = ({ data }) => {
  let content = null;

  content = data.map((ob) => {
    return (
      <div className="border rounded border-secondary w-25 mx-auto">
        <Data
          country={ob.country}
          province={ob.province}
          updatedAt={ob.updatedAt}
        />
      </div>
    );
  });

  return <Layout>{content}</Layout>;
};

export async function getServerSideProps(context) {
  const res = await fetch("https://corona.lmao.ninja/v2/jhucsse");
  const data = await res.json();
  return {
    props: {
      data: data.slice(0, 10),
    },
  };
}

export default JohnHopkins;
