const user = (state={}, action) => {
    switch(action.type) {
      case "SET_NAME": {
       // console.log(action.payload)
        return {...state, name: action.payload};
        
      }
      case "SET_AGE": {
        return {...state, age: action.payload};
       
      }
      case "E":{
        throw new Error("purposely throwing error while sending dispatch as E")
      }
      default:
      return state
    }
   
  }

  export default user