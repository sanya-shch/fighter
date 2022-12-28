import samuraiMackIdle from "../assets/samuraiMack/Idle.png";
import samuraiMackRun from "../assets/samuraiMack/Run.png";
import samuraiMackJump from "../assets/samuraiMack/Jump.png";
import samuraiMackFall from "../assets/samuraiMack/Fall.png";
import samuraiMackAttack1 from "../assets/samuraiMack/Attack1.png";
import samuraiMackTakeHit from "../assets/samuraiMack/Take Hit - white silhouette.png";
import samuraiMackDeath from "../assets/samuraiMack/Death.png";

import kenjiIdle from "../assets/kenji/Idle.png";
import kenjiRun from "../assets/kenji/Run.png";
import kenjiJump from "../assets/kenji/Jump.png";
import kenjiFall from "../assets/kenji/Fall.png";
import kenjiAttack1 from "../assets/kenji/Attack1.png";
import kenjiTakeHit from "../assets/kenji/Take hit.png";
import kenjiDeath from "../assets/kenji/Death.png";

const samuraiMack = {
  idle: {
    imageSrc: samuraiMackIdle,
    framesMax: 8,
  },
  run: {
    imageSrc: samuraiMackRun,
    framesMax: 8,
  },
  jump: {
    imageSrc: samuraiMackJump,
    framesMax: 2,
  },
  fall: {
    imageSrc: samuraiMackFall,
    framesMax: 2,
  },
  attack1: {
    imageSrc: samuraiMackAttack1,
    framesMax: 6,
  },
  takeHit: {
    imageSrc: samuraiMackTakeHit,
    framesMax: 4,
  },
  death: {
    imageSrc: samuraiMackDeath,
    framesMax: 6,
  },
};

const kenji = {
  idle: {
    imageSrc: kenjiIdle,
    framesMax: 4,
  },
  run: {
    imageSrc: kenjiRun,
    framesMax: 8,
  },
  jump: {
    imageSrc: kenjiJump,
    framesMax: 2,
  },
  fall: {
    imageSrc: kenjiFall,
    framesMax: 2,
  },
  attack1: {
    imageSrc: kenjiAttack1,
    framesMax: 4,
  },
  takeHit: {
    imageSrc: kenjiTakeHit,
    framesMax: 3,
  },
  death: {
    imageSrc: kenjiDeath,
    framesMax: 7,
  },
};

export { samuraiMack, kenji };
