import { SAVE_GLOBALS, UPDATE_ALERT } from "../action/appAction";

const initialState = {
  globals: {},
  alert: {
    showAlert: false,
    message: ""
  }
};
const app = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_GLOBALS:
      return {
        ...state,
        globals: action.value,
      };
    case UPDATE_ALERT:
      return {
        ...state,
        alert: action.value
      }
    default:
      return state;
  }
};
export default app;