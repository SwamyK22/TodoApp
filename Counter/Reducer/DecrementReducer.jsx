

const initCount = {
    count: 0,
}

const decrementReducer = (state = initCount, { type, payload }) => {
    switch (type) {
        case 'INCREMENT':
            return {...state, count: state.count + payload};
        case 'DECREMENT':
            return {...state, count: state.count - payload};
    
        default:
            return state;
    }
};

export default decrementReducer