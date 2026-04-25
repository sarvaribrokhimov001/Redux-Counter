import { createStore } from "redux";

const init = {
  counter: 0,
};

const counterReduser = (state = init, action) => {
  switch (action?.type) {
    case "inc": {
      return { counter: state.counter + 1 };
    }
    case "dec": {
      return { counter: state.counter - 1 };
    }
    case "reset": {
      return { counter: 0 };
    }

    default: {
      return state;
    }
  }
};
export const store = createStore(counterReduser);