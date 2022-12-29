import React from "react";

import "./style.scss";

const HealthPanel = ({ count }) => (
  <div className="health_panel">
    <div className="player1_health_wrapper">
      <div />
      <div id="playerHealth" />
    </div>

    <div id="timer" className="timer_block">
      {count}
    </div>

    <div className="player2_health_wrapper">
      <div />
      <div id="enemyHealth" />
    </div>
    <div />
  </div>
);

export default HealthPanel;
