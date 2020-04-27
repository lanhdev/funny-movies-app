const initialState = {
  currentUser: {
    id: null,
    userName: '',
    authToken: '',
    isSignedIn: false
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SIGN_IN') {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        id: action.payload.id,
        userName: action.payload.userName,
        authToken: action.payload.authToken,
        isSignedIn: action.payload.isSignedIn
      }
    }
  }
  return state;
}

export default reducer;
