import * as sprites from "./sprites";

const samuraiMack = {
  spriteName: "samuraiMack",
  velocity: {
    x: 0,
    y: 0,
  },
  imageSrc: sprites.samuraiMack.idle.imageSrc,
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 157,
  },
  sprites: sprites.samuraiMack,
  attackBox: {
    width: 160,
    height: 50,
  },
  facingRight: true,
};

const kenji = {
  spriteName: "kenji",
  velocity: {
    x: 0,
    y: 0,
  },
  imageSrc: sprites.kenji.idle.imageSrc,
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 167,
  },
  sprites: sprites.kenji,
  attackBox: {
    width: 170,
    height: 50,
  },
  facingRight: false,
};

export { samuraiMack, kenji };
