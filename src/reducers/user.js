const user = (state={}, action) => {
    switch(action.type) {
      case "SET_NAME": {
        console.log(action.payload)
        return {...state, name: action.payload};
        
      }
      case "SET_AGE": {
        return {...state, age: action.payload};
       
      }
      default:
      return state
    }
    //return state;
  }

  export default user