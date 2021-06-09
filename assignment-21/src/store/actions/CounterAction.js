import {INCREASE, DECREASE, RESET} from '../Types';


export const updateCounter = (click) => {
    console.log('console in counter action')
return{
    type: INCREASE,
    payload: click
}

}
export const decreaseCounter = (click) => {
    return {
        type: DECREASE,
        payload: click
    }
    
    }
    export const resetCounter = (click) => {
        return {
            type: RESET,
            payload: click
        }
        
        }