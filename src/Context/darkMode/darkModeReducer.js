import { DARKMODE_ON, DARKMODE_OFF } from "../types";

export default (state, action) => {
  switch (action.type) {
    case DARKMODE_ON:
      return {
        ...state,
        isDarkMode: true,
      };
    case DARKMODE_OFF:
      return {
        ...state,
        isDarkMode: false,
      };
    default:
      return state;
  }
};
