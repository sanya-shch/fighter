import { makeAutoObservable } from "mobx";

import { Fighter } from "../classes/Fighter.js";
import { Sprite } from "../classes/Sprite.js";

import backgroundImg from "../assets/background.png";
import shopImg from "../assets/shop.png";
import * as sprites from "../data/sprites.js";
import { GAME_TEXT } from "../constants";

class GameStore {
  canvasWidth = 1024;
  canvasHeight = 576;

  gravity = 0.7;

  background = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: backgroundImg,
  });

  shop = new Sprite({
    position: {
      x: 600,
      y: 128,
    },
    imageSrc: shopImg,
    scale: 2.75,
    framesMax: 6,
  });

  player1Sprite = "samuraiMack";
  player2Sprite = "kenji";

  player1 = {};
  player2 = {};

  keys = {
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
    ArrowRight: {
      pressed: false,
    },
    ArrowLeft: {
      pressed: false,
    },
  };

  gameText = GAME_TEXT.NOTHING;

  isPlaying = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPlayers() {
    this.player1 = new Fighter({
      spriteName: this.player1Sprite,
      position: {
        x: 50,
        y: 0,
      },
      velocity: {
        x: 0,
        y: 0,
      },
      imageSrc: sprites[`${this.player1Sprite}Idle`],
      framesMax: 8,
      scale: 2.5,
      offset: {
        x: 215,
        y: 157,
      },
      sprites: sprites[this.player1Sprite],
      attackBox: {
        offset: {
          x: 100,
          y: 50,
        },
        width: 160,
        height: 50,
      },
      canvasHeight: this.canvasHeight,
      gravity: this.gravity,
    });

    this.player2 = new Fighter({
      spriteName: this.player2Sprite,
      position: {
        x: 900,
        y: 100,
      },
      velocity: {
        x: 0,
        y: 0,
      },
      color: "blue",
      imageSrc: sprites[`${this.player2Sprite}Idle`],
      framesMax: 4,
      scale: 2.5,
      offset: {
        x: 215,
        y: 167,
      },
      sprites: sprites[this.player2Sprite],
      attackBox: {
        offset: {
          x: -170,
          y: 50,
        },
        width: 170,
        height: 50,
      },
      canvasHeight: this.canvasHeight,
      gravity: this.gravity,
    });
  }

  setKeys(key, param, value) {
    this.keys[key][param] = value;
  }

  setPlayerOneIsAttacking(value) {
    this.player1.isAttacking = value;
  }
  setPlayerTwoIsAttacking(value) {
    this.player2.isAttacking = value;
  }

  setPlayerOneLastKey(value) {
    this.player1.lastKey = value;
  }
  setPlayerTwoLastKey(value) {
    this.player2.lastKey = value;
  }

  setPlayerOneVelocity(param, value) {
    this.player1.velocity[param] = value;
  }
  setPlayerTwoVelocity(param, value) {
    this.player2.velocity[param] = value;
  }

  endGame() {
    this.isPlaying = false;

    if (this.player1.health === this.player2.health) {
      this.gameText = GAME_TEXT.TIE;
    } else if (this.player1.health > this.player2.health) {
      this.gameText = GAME_TEXT.PLAYER_1_WINS;
    } else if (this.player1.health < this.player2.health) {
      this.gameText = GAME_TEXT.PLAYER_2_WINS;
    }
  }

  setGameText(value) {
    this.gameText = value;
  }

  setPlaying(value) {
    this.isPlaying = value !== undefined ? value : !this.isPlaying;
  }
}

export default new GameStore();
