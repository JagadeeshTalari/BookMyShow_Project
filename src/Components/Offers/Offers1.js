import React from "react";
import "./Offers.css";

function Offers1({ imgLink, para1, para2 }) {
  return (
    <div className="card">
      <img src={imgLink} alt={para1.substring(0, 10)}></img>
      <p>{para1}</p>
      <p> Valid till{para2}</p>
    </div>
  );
}

export default Offers1;
