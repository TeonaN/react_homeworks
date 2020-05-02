import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./Data";

function JohnHopkins() {
  const [data, setData] = useState([]);
  const [button, setButton] = useState(true);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/jhucsse")
      .then((response) => {
        setData(response.data.slice(0, 15));
      })
      .catch((err) => {
        console.error("[JohnHopkins.jsx]", err.message);
      });
  }, []);

  let content = null;
  if (!button) {
    content = data.map((ob) => {
      return (
        <Data
          country={ob.country}
          province={ob.province}
          updatedAt={ob.updatedAt}
        />
      );
    });
  }

  return (
    <div>
      <button className="btn btn-danger" onClick={() => setButton(!button)  }>Country Data</button>
      {content}
    </div>
  );
}

export default JohnHopkins;

