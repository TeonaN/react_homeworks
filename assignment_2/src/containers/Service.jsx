import React from "react";
import All from "../components/Get/All";
import Countries from "../components/Get/Countries/Countries";
import Select from "../components/Get/EachCountry/Select";
import State from "../components/Get/State/State";
import JohnHopkins from "../components/Get/JohnHopkins/JohnHopkins";

function Service(props) {
  return (
    <div className="row flex-column">
            <All />
      <div className="row center">
    <JohnHopkins />
      <State />
      <Countries />
     </div>

      <Select />

    </div>
  );
}

export default Service;
