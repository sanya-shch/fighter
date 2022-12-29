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

const medievalKing = {
  spriteName: "medievalKing",
  velocity: {
    x: 0,
    y: 0,
  },
  imageSrc: sprites.medievalKing.idle.imageSrc,
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 110,
  },
  sprites: sprites.medievalKing,
  attackBox: {
    width: 160,
    height: 50,
  },
  facingRight: true,
};

const medievalWarrior = {
  spriteName: "medievalWarrior",
  velocity: {
    x: 0,
    y: 0,
  },
  imageSrc: sprites.medievalWarrior.idle.imageSrc,
  framesMax: 10,
  scale: 3,
  offset: {
    x: 215,
    y: 105,
  },
  sprites: sprites.medievalWarrior,
  attackBox: {
    width: 160,
    height: 50,
  },
  facingRight: true,
};

const martialHero = {
  spriteName: "martialHero",
  velocity: {
    x: 0,
    y: 0,
  },
  imageSrc: sprites.martialHero.idle.imageSrc,
  framesMax: 10,
  scale: 2.5,
  offset: {
    x: 215,
    y: 53,
  },
  sprites: sprites.martialHero,
  attackBox: {
    width: 160,
    height: 50,
  },
  facingRight: true,
};

const huntress = {
  spriteName: "huntress",
  velocity: {
    x: 0,
    y: 0,
  },
  imageSrc: sprites.huntress.idle.imageSrc,
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 90,
  },
  sprites: sprites.huntress,
  attackBox: {
    width: 160,
    height: 50,
  },
  facingRight: true,
};

export {
  samuraiMack,
  kenji,
  medievalKing,
  medievalWarrior,
  martialHero,
  huntress,
};
