import React from "react";
import Card from "./Card";
function CardContainer() {
  const UserIP = "UserIP";
  const Latency = "Latency";
  return (
    <div className="card-container">
      <Card details={UserIP} />
      <Card details={Latency} />
    </div>
  );
}

export default CardContainer;
