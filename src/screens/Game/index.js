import React, { useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";

import "./style.scss";

import Canvas from "../../components/Canvas";
import HealthPanel from "../../components/HealthPanel";
import useKeyPress from "../../hooks/useKeyPress";
import gameStore from "../../store/game.js";
import { rectangularCollision } from "../../utils/rectangularCollision";

const GamePage = observer(() => {
  const canvasRef = useRef(null);

  // const determineWinner = ({ player, enemy, timerId }) => {
  //   clearTimeout(timerId);
  //   document.querySelector("#displayText").style.display = "flex";
  //   if (player.health === enemy.health) {
  //     document.querySelector("#displayText").innerHTML = "Tie";
  //   } else if (player.health > enemy.health) {
  //     document.querySelector("#displayText").innerHTML = "Player 1 Wins";
  //   } else if (player.health < enemy.health) {
  //     document.querySelector("#displayText").innerHTML = "Player 2 Wins";
  //   }
  // };

  // let timer = 60
  // let timerId
  // function decreaseTimer() {
  //   if (timer > 0) {
  //     timerId = setTimeout(decreaseTimer, 1000)
  //     timer--
  //     document.querySelector('#timer').innerHTML = timer
  //   }
  //
  //   if (timer === 0) {
  //     determineWinner({ player, enemy, timerId })
  //   }
  // }

  useKeyPress(
    (event) => {
      if (!gameStore.player1.dead) {
        switch (event.key) {
          case "d":
            gameStore.setKeys("d", "pressed", true);
            gameStore.setPlayerOneLastKey("d");
            break;
          case "a":
            gameStore.setKeys("a", "pressed", true);
            gameStore.setPlayerOneLastKey("a");
            break;
          case "w":
            gameStore.setPlayerOneVelocity("y", -20);
            break;
          case " ":
            gameStore.player1.attack();
            break;
        }
      }

      if (!gameStore.player2.dead) {
        switch (event.key) {
          case "ArrowRight":
            gameStore.setKeys("ArrowRight", "pressed", true);
            gameStore.setPlayerTwoLastKey("ArrowRight");
            break;
          case "ArrowLeft":
            gameStore.setKeys("ArrowLeft", "pressed", true);
            gameStore.setPlayerTwoLastKey("ArrowLeft");
            break;
          case "ArrowUp":
            gameStore.setPlayerTwoVelocity("y", -20);
            break;
          case "ArrowDown":
            gameStore.player2.attack();
            break;
        }
      }

      event.preventDefault();
    },
    (event) => {
      switch (event.key) {
        case "d":
          gameStore.setKeys("d", "pressed", false);
          break;
        case "a":
          gameStore.setKeys("a", "pressed", false);
          break;
      }

      switch (event.key) {
        case "ArrowRight":
          gameStore.setKeys("ArrowRight", "pressed", false);
          break;
        case "ArrowLeft":
          gameStore.setKeys("ArrowLeft", "pressed", false);
          break;
      }

      event.preventDefault();
    }
  );

  const draw = (ctx) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, gameStore.canvasWidth, gameStore.canvasHeight);
    gameStore.background.update(ctx);
    gameStore.shop.update(ctx);
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    ctx.fillRect(0, 0, gameStore.canvasWidth, gameStore.canvasHeight);

    if (gameStore.player1?.spriteName && gameStore.player2?.spriteName) {
      gameStore.player1.update(ctx);
      gameStore.player2.update(ctx);

      gameStore.setPlayerOneVelocity("x", 0);
      gameStore.setPlayerTwoVelocity("x", 0);

      // player movement
      if (gameStore.keys.a.pressed && gameStore.player1.lastKey === "a") {
        gameStore.setPlayerOneVelocity("x", -5);
        gameStore.player1.switchSprite("run");
      } else if (
        gameStore.keys.d.pressed &&
        gameStore.player1.lastKey === "d"
      ) {
        gameStore.setPlayerOneVelocity("x", 5);
        gameStore.player1.switchSprite("run");
      } else {
        gameStore.player1.switchSprite("idle");
      }

      // jumping
      if (gameStore.player1.velocity.y < 0) {
        gameStore.player1.switchSprite("jump");
      } else if (gameStore.player1.velocity.y > 0) {
        gameStore.player1.switchSprite("fall");
      }

      // Enemy movement
      if (
        gameStore.keys.ArrowLeft.pressed &&
        gameStore.player2.lastKey === "ArrowLeft"
      ) {
        gameStore.setPlayerTwoVelocity("x", -5);
        gameStore.player2.switchSprite("run");
      } else if (
        gameStore.keys.ArrowRight.pressed &&
        gameStore.player2.lastKey === "ArrowRight"
      ) {
        gameStore.setPlayerTwoVelocity("x", 5);
        gameStore.player2.switchSprite("run");
      } else {
        gameStore.player2.switchSprite("idle");
      }

      // jumping
      if (gameStore.player2.velocity.y < 0) {
        gameStore.player2.switchSprite("jump");
      } else if (gameStore.player2.velocity.y > 0) {
        gameStore.player2.switchSprite("fall");
      }

      // detect for collision & enemy gets hit
      if (
        rectangularCollision({
          rectangle1: gameStore.player1,
          rectangle2: gameStore.player2,
        }) &&
        gameStore.player1.isAttacking &&
        gameStore.player1.framesCurrent === 4
      ) {
        gameStore.player2.takeHit();
        gameStore.setPlayerOneIsAttacking(false);

        // gsap.to('#enemyHealth', {
        //   width: gameStore.player2.health + '%'
        // })
      }

      // if player misses
      if (
        gameStore.player1.isAttacking &&
        gameStore.player1.framesCurrent === 4
      ) {
        gameStore.setPlayerOneIsAttacking(false);
      }

      // this is where our player gets hit
      if (
        rectangularCollision({
          rectangle1: gameStore.player2,
          rectangle2: gameStore.player1,
        }) &&
        gameStore.player2.isAttacking &&
        gameStore.player2.framesCurrent === 2
      ) {
        gameStore.player1.takeHit();
        gameStore.setPlayerTwoIsAttacking(false);

        // gsap.to('#playerHealth', {
        //   width: gameStore.player1.health + '%'
        // })
      }

      // if player misses
      if (
        gameStore.player2.isAttacking &&
        gameStore.player2.framesCurrent === 2
      ) {
        gameStore.setPlayerTwoIsAttacking(false);
      }

      // end game based on health
      if (gameStore.player2.health <= 0 || gameStore.player1.health <= 0) {
        // determineWinner({
        //   player: gameStore.player1,
        //   enemy: gameStore.player2,
        //   timerId,
        // });
      }
    }
  };

  useEffect(() => {
    gameStore.setPlayers();
  }, []);

  return (
    <div>
      GamePage
      <HealthPanel />
      <Canvas ref={canvasRef} draw={draw} />
    </div>
  );
});

export default GamePage;
