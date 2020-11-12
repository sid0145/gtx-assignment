const Appreducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_EMPLOYEE":
      return {
        employess: state.employess.filter((empl) => {
          return empl.id !== action.payload;
        }),
      };

    case "ADD_EMPLOYEE":
      return {
        employess: [action.payload, ...state.employess],
      };

    case "EDIT_EMPL":
      const updateEmployee = action.payload;

      const updatedEmployee = state.employess.map((empl) => {
        if (empl.id === updateEmployee.id) {
          return updateEmployee;
        }
        return empl;
      });

      return {
        employess: updatedEmployee,
      };

    default:
      return state;
  }
};
export default Appreducer;
