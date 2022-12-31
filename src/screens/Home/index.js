import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import gameStore from "../../store/game";
import logo from "../../assets/swords.png";
import useKeyPress from "../../hooks/useKeyPress";
import { PLAYERS_LIST } from "../../constants";

const homePagePlayersData = {
  samuraiMack: [
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 4,
      offset: {
        x: 300,
        y: 480,
      },
    },
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 4,
      offset: {
        x: 0,
        y: 470,
      },
    },
  ],
  kenji: [
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 4,
      offset: {
        x: 300,
        y: 480,
      },
    },
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 4,
      offset: {
        x: 300,
        y: 500,
      },
    },
  ],
  medievalKing: [
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 4,
      offset: {
        x: 250,
        y: 410,
      },
    },
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 4,
      offset: {
        x: 0,
        y: 400,
      },
    },
  ],
  medievalWarrior: [
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 5,
      offset: {
        x: 250,
        y: 410,
      },
    },
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 5,
      offset: {
        x: -80,
        y: 420,
      },
    },
  ],
  martialHero: [
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 4,
      offset: {
        x: 180,
        y: 320,
      },
    },
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 4,
      offset: {
        x: -20,
        y: 320,
      },
    },
  ],
  huntress: [
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 4,
      offset: {
        x: 200,
        y: 380,
      },
    },
    {
      position: {
        x: 100,
        y: 0,
      },
      scale: 4,
      offset: {
        x: 0,
        y: 380,
      },
    },
  ],
};

const HomePage = observer(() => {
  const navigate = useNavigate();

  const canvasLeftRef = React.useRef(null);
  const canvasRightRef = React.useRef(null);

  useEffect(() => {
    if (!canvasLeftRef) {
      return;
    }
    const canvas = canvasLeftRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    canvas.width = 400;
    canvas.height = 400;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let animationFrameId;

    const render = () => {
      ctx.fillStyle = "#414141";
      ctx.fillRect(0, 0, gameStore.canvasWidth, gameStore.canvasHeight);

      if (gameStore.player1?.spriteName) {
        gameStore.player1.update(ctx);

        gameStore.setPlayerOneVelocity("x", 0);
      }

      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [canvasLeftRef]);

  useEffect(() => {
    if (!canvasRightRef) {
      return;
    }
    const canvas = canvasRightRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    canvas.width = 400;
    canvas.height = 400;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let animationFrameId;

    const render = () => {
      ctx.fillStyle = "#414141";
      ctx.fillRect(0, 0, gameStore.canvasWidth, gameStore.canvasHeight);

      if (gameStore.player2?.spriteName) {
        gameStore.player2.update(ctx);

        gameStore.setPlayerTwoVelocity("x", 0);
      }

      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRightRef]);

  useEffect(() => {
    gameStore.setPlayers(
      homePagePlayersData.samuraiMack[0],
      homePagePlayersData.kenji[1]
    );
  }, []);

  const handleClick = () => {
    navigate("/game");
  };

  useKeyPress(
    (event) => {
      let playersList, index;

      switch (event.key) {
        case "d":
          playersList = PLAYERS_LIST.filter(
            (item) => item !== gameStore.player2Sprite
          );
          index = playersList.findIndex(
            (item) => item === gameStore.player1Sprite
          );

          gameStore.setPlayer1(
            index === playersList.length - 1
              ? playersList[0]
              : playersList[index + 1],
            homePagePlayersData[
              index === playersList.length - 1
                ? playersList[0]
                : playersList[index + 1]
            ][0]
          );
          break;
        case "a":
          playersList = PLAYERS_LIST.filter(
            (item) => item !== gameStore.player2Sprite
          );
          index = playersList.findIndex(
            (item) => item === gameStore.player1Sprite
          );

          gameStore.setPlayer1(
            index === 0 ? playersList.at(-1) : playersList[index - 1],
            homePagePlayersData[
              index === 0 ? playersList.at(-1) : playersList[index - 1]
            ][0]
          );
          break;
        case "ArrowRight":
          playersList = PLAYERS_LIST.filter(
            (item) => item !== gameStore.player1Sprite
          );
          index = playersList.findIndex(
            (item) => item === gameStore.player2Sprite
          );

          gameStore.setPlayer2(
            index === playersList.length - 1
              ? playersList[0]
              : playersList[index + 1],
            homePagePlayersData[
              index === playersList.length - 1
                ? playersList[0]
                : playersList[index + 1]
            ][1]
          );
          break;
        case "ArrowLeft":
          playersList = PLAYERS_LIST.filter(
            (item) => item !== gameStore.player1Sprite
          );
          index = playersList.findIndex(
            (item) => item === gameStore.player2Sprite
          );

          gameStore.setPlayer2(
            index === 0 ? playersList.at(-1) : playersList[index - 1],
            homePagePlayersData[
              index === 0 ? playersList.at(-1) : playersList[index - 1]
            ][1]
          );
          break;
        case " ":
          navigate("/game");
          break;
      }
    },
    () => {}
  );

  return (
    <div className="home_page">
      <div className="player">
        <canvas ref={canvasLeftRef} />
        <div>A || D</div>
      </div>
      <div className="wrapper">
        <div className="title_block">
          <img src={logo} alt="" />
          <div className="title">FIGHTER</div>
        </div>
        <div className="start_btn" onClick={handleClick}>
          START GAME
        </div>
      </div>
      <div className="player">
        <canvas ref={canvasRightRef} />
        <div>&larr; || &rarr;</div>
      </div>
    </div>
  );
});

export default HomePage;
