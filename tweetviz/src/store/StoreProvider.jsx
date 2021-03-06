import React from "react";

import { StoreContext } from "./StoreContext";
import { StoreDispatchContext } from "./StoreDispatchContext";
import createReducer from "../utils/createReducer";

const useReducer = createReducer();

const actionTypes = {
  tweets: {
    provide: "tweets/provide",
  },
  selected: {
    update: "selected/update",
  },
  type: {
    toggle: "type/toggle",
  },
};

const appInitialState = {
  tweets: null,
  selected: null,
  type: "news",
};

const tweetsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.tweets.provide: {
      return action.data;
    }
    default:
      return state;
  }
};

const selectedReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.selected.update: {
      return action.data;
    }
    default:
      return state;
  }
};

const typeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.type.toggle: {
      return state === "news" ? "claim" : "news";
    }
    default:
      return state;
  }
};

const appReducer = (state, action) => {
  return {
    tweets: tweetsReducer(state.tweets, action),
    selected: selectedReducer(state.selected, action),
    type: typeReducer(state.type, action),
  };
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  return (
    <StoreDispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
    </StoreDispatchContext.Provider>
  );
};

export default StoreProvider;
