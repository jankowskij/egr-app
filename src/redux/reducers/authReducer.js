const SET_ACTIVE_LOGIN_FORM = "SET_ACTIVE_LOGIN_FORM";
const SET_NOACTIVE_LOGIN_FORM = "SET_NOACTIVE_LOGIN_FORM";

let initialState = {
  isActive: null,
};


export const authReducer = (state = initialState, action) => {

  let stateCopy = { ...state };


  if (action.type === SET_ACTIVE_LOGIN_FORM) {
      stateCopy.isActive = true;
      return stateCopy;
  }

  if (action.type === SET_NOACTIVE_LOGIN_FORM) {
    stateCopy.isActive = false;
    return stateCopy;
}

  return stateCopy;
};

export let setActiveLogin = (data) => {
  return {
    type: SET_ACTIVE_LOGIN_FORM,
    data: data,
  };
}

  export let setNoActiveLogin = (data) => {
    return {
      type: SET_NOACTIVE_LOGIN_FORM,
      data: data,
    };
  };
