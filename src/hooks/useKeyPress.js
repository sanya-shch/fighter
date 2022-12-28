import { useEffect } from "react";

export default function useKeyPress(fnKeyDown, fnKeyUp) {
  useEffect(() => {
    window.addEventListener("keydown", fnKeyDown);
    window.addEventListener("keyup", fnKeyUp);

    return () => {
      window.removeEventListener("keydown", fnKeyDown);
      window.removeEventListener("keyup", fnKeyUp);
    };
  }, [fnKeyDown, fnKeyUp]);
}
