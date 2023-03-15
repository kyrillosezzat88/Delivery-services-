import { createContext, useReducer } from "react";
import AppReducers from "./AppReducers";
import InitState from "./InitState";

export const AppContext = createContext(InitState);

const AppProvider = ({ children }) => {
  const [AppData, dispatch] = useReducer(AppReducers, InitState);
  return (
    <AppContext.Provider value={{ AppData, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
