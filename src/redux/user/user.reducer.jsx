const INITIAL_STATE = {
  currentuSER: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER': {
      return {
        ...state,
        currentUser: action.payload
      }
    }
    default:
      return state;
  }
}


export default userReducer;


// {
//   type:
//   payload: 
// }