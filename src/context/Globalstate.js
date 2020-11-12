import React, { createContext, useReducer } from "react";
import Appreducer from "./Appreducer";

//initial state
const initialState = {
  employess: [{ id: "dskjfbkfnoj23", name: "employee one" }],
};

//creating context
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);
  //actions
  // removing employee
  const removeEmployee = (id) => {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  };
  //adding employee
  const addEmployee = (user) => {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: user,
    });
  };

  //editing user

  const editEmployee = (user) => {
    dispatch({
      type: "EDIT_EMPL",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        employess: state.employess,
        removeEmployee,
        addEmployee,
        editEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
