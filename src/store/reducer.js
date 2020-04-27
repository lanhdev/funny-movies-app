const initialState = {
  currentUser: {
    id: null,
    userName: "",
    authToken: "",
    isSignedIn: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          id: action.payload.id,
          userName: action.payload.userName,
          authToken: action.payload.authToken,
          isSignedIn: action.payload.isSignedIn,
        },
      };
    case "SIGN_OUT":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          id: null,
          userName: "",
          authToken: "",
          isSignedIn: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
