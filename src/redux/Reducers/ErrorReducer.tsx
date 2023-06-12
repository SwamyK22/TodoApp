
const initState = {
    error:null
}

const ErrorReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case 'ERROR':
            return  {
                error: payload
            }
        default:
            return state;
    }
}

export default ErrorReducer;