const counter = (state =0, action) => {
   // console.log('payload****'+action.payload)
    switch (action.type){
        case 'INCREMENT' : 
            return state + action.payload
        default :
            return state
    }
}

export default counter;