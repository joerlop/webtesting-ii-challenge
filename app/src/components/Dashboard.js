import React from "react";
import "../App.css";

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <button onClick={(e) => props.handleStrike(e)}>Strike</button>
      <button onClick={(e) => props.handleBall(e)}>Ball</button>
      <button onClick={(e) => props.handleFoul(e)}>Foul</button>
      <button onClick={(e) => props.handleHit(e)}>Hit</button>
    </div>
  );
}

export default Dashboard;
