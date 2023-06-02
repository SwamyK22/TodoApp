
const initState = {
    count:0
}

const counterReducer = (state=initState, {type, payload}) => {

    switch (type) {
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                count: state.count + payload
            }
        case 'DECREMENT_COUNTER':
            return {
                ...state,
                count: state.count - 1
            }
    
        default:
            break;
    }

}

export default counterReducer;