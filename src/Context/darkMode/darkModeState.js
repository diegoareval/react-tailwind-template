import React, { useReducer } from "react";

import DarkModeContext from "./darkModeContext";
import darkModeReducer from "./darkModeReducer";

import { DARKMODE_ON, DARKMODE_OFF } from "../types";

const DarkModeState = (props) => {
  const initialState = {
    isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
    error: null,
  };

  const [state, dispatch] = useReducer(darkModeReducer, initialState);

  const html = document.documentElement.classList;

  const darkModeOn = () => {
    html.add("mode-dark");
    dispatch({
      type: DARKMODE_ON,
    });
  };

  const darkModeOff = () => {
    html.remove("mode-dark");
    dispatch({
      type: DARKMODE_OFF,
    });
  };

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode: state.isDarkMode,
        error: state.error,
        darkModeOn,
        darkModeOff,
      }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeState;
