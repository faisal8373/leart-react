import {INCREASE, DECREASE, RESET} from '../Types';

let initialState = 0;

function counter(state = initialState, action){
    switch(action.type){
        case INCREASE:{
            console.log('console in counter reducer', state)
            let newState = 0;
            newState = state + 1;
                     
        
        return newState;
        }
        case DECREASE:{
            let newState = 0;
            newState = state - 1;
        
        return newState;
        }
        case RESET:{
            let newState = 0;
            
        
        return newState;
        }
        default:
            return state;
        }
    
}

export default counter;