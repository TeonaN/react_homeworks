import React from "react";
import All from "../components/Get/All";
import Countries from "../components/Get/Countries/Countries";
import Select from "../components/Get/EachCountry/Select";
import State from "../components/Get/State/State";

function Service(props) {
  return (
    <div>
      <Select />
      <State />
      <All />
      <Countries />
    </div>
  );
}

export default Service;
