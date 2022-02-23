export const USERS ="USERS"
  const initial_state = {
    users:[]
  };
  
  export default function reducer(state = initial_state, action) {
    switch (action.type) {
      case USERS:
        return (state = { ...state,users: action.payload  });
      
        default:
            return state;
    }}