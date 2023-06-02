import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./counterActionType"
export const incrementCounterAction = (count) => {
    return {
        type: INCREMENT_COUNTER,
        payload:count
    }
}
export const decrementCounterAction = () => {
    return {
        type: DECREMENT_COUNTER,
    }
}