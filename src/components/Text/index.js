import React from "react";
import { observer } from "mobx-react-lite";
import { gsap } from "gsap";

import "./style.scss";

import gameStore from "../../store/game.js";
import { GAME_TEXT, GAME_TIME } from "../../constants";

const Text = observer(({ setCount }) => {
  const handleResetGame = () => {
    gameStore.setPlayers();
    gameStore.setGameText(GAME_TEXT.NOTHING);
    gameStore.setPlaying();
    setCount(GAME_TIME);

    gsap.to("#enemyHealth", {
      width: 100 + "%",
    });
    gsap.to("#playerHealth", {
      width: 100 + "%",
    });
  };

  return (
    gameStore.gameText && (
      <div id="displayText" className="text_block">
        {gameStore.gameText}

        <div className="reset_btn" onClick={handleResetGame}>
          PLAY AGAIN
        </div>
      </div>
    )
  );
});

export default Text;
