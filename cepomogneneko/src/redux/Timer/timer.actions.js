import { INCREMENT } from "./timer.types";

export const increaseTimer = () => {
  return {
    type: INCREMENT,
  };
};
