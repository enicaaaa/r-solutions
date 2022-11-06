import { INCREMENT } from "./timer.types";

const INITIAL_STATE = {
  timer: { hours: 0, mins: 0, seconds: 0 },
};

const formatTimer = (timer) => {
  let seconds, mins, hours;
  if (timer.seconds !== 59) {
    seconds = timer.seconds + 1;
    mins = timer.mins;
    hours = timer.hours;

    return {
      hours,
      mins,
      seconds,
    };
  }

  seconds = 0;
  if (timer.mins !== 59) {
    mins = timer.mins + 1;
    hours = timer.hours;

    return {
      hours,
      mins,
      seconds,
    };
  }

  mins = 0;
  hours = timer.hours + 1;
  return {
    seconds,
    mins,
    hours,
  };
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        timer: formatTimer(state.timer),
      };
    default:
      return state;
  }
};

export default reducer;
