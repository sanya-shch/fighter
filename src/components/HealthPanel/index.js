import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

const HealthPanel = ({ count }) => {
  const navigate = useNavigate();

  return (
    <div className="health_panel">
      <div className="player1_health_wrapper">
        <div />
        <div id="playerHealth" />
      </div>

      <div id="timer" className="timer_block" onClick={() => navigate("/")}>
        {count}
      </div>

      <div className="player2_health_wrapper">
        <div />
        <div id="enemyHealth" />
      </div>
      <div />
    </div>
  );
};

export default HealthPanel;
