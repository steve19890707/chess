import React, { createContext, useReducer } from "react";
import { App } from "./App";
import { fromJS } from "immutable";
const ReducerContext = createContext();
const createPointArray = () => {
  const list = [];
  const fetchInitStatus = (index) => {
    switch (index) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 19:
      case 25:
      case 27:
      case 29:
      case 31:
      case 33:
      case 35:
      case 54:
      case 56:
      case 58:
      case 60:
      case 62:
      case 64:
      case 70:
      case 81:
      case 82:
      case 83:
      case 84:
      case 85:
      case 86:
      case 87:
      case 88:
      case 89:
        return true;
      default:
        return false;
    }
  };
  for (let i = 0; i < 90; i++) {
    list.push({
      current: "",
      status: fetchInitStatus(i),
    });
  }
  return fromJS(list);
};
const initState = {
  chessPoint: createPointArray(),
};
const todoReducer = (state, action) => {
  const playload = action.playload;
  switch (action.type) {
    default:
      return state;
  }
};
export { ReducerContext };
export const Props = () => {
  const reducer = useReducer(todoReducer, initState);
  return (
    <ReducerContext.Provider value={reducer}>
      <App />
    </ReducerContext.Provider>
  );
};
