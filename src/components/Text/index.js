import React from "react";
import { observer } from "mobx-react-lite";

import "./style.scss";

import gameStore from "../../store/game.js";

const Text = observer(() => (
  <div id="displayText" className="text_block">
    {gameStore.gameText}
  </div>
));

export default Text;
