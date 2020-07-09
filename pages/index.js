import React from "react";
import Router from "next/router";
import Layout from "../components/layout";

export default function Home({ global }) {
  return (
    <Layout>
      <h1>Global Data</h1>
      <p> Today Cases: {global.todayCases} </p>
      <p> Today Deaths: {global.todayDeaths} </p>
      <p> Recovered: {global.recovered} </p>
      <p> Active: {global.active} </p>
      <p> Critical: {global.critical} </p>

      <button
        className="btn btn-danger mr-3"
        onClick={() => Router.push("/countries")}
      >
        Countries
      </button>
      <button
        className="btn btn-danger mr-3"
        onClick={() => Router.push("/data")}
      >
        Country Data
      </button>
      <button
        className="btn btn-danger mr-3"
        onClick={() => Router.push("/state")}
      >
        State Data
      </button>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://corona.lmao.ninja/v2/all");
  const global = await res.json();
  return {
    props: { global },
  };
}
