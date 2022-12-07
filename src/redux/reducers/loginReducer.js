const SET_ACTIVE_LOGIN_FORM = "SET_ACTIVE_LOGIN_FORM";

let initialState = {
  isActive: false,
};

export const articlesReducer = (state = initialState, action) => {
  let stateCopy = { ...state };


  if (action.type === SET_ACTIVE_LOGIN_FORM) {
    stateCopy.isActive = true;
    return stateCopy;
  }

  return stateCopy;
};

export let setActiveLogin = (data) => {
  return {
    type: SET_ACTIVE_LOGIN_FORM,
    data: data,
  };
};
