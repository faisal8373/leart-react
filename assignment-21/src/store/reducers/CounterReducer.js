import COUNTER from '../Types';

let initialState = {
    count: 0
}

function counter(state = initialState, action){
    switch(action.type){
        case COUNTER:{
            
        }
        return {
            state
        }

        default:
            return state
        }
    
}

export default counter;