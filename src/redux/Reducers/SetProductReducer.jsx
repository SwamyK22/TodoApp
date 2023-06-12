

const SetProductReducer = (state = null, { type, payload }) => {
    switch (type) {
        case 'SET_PRODUCT':
            return payload;
        default:
            return state;
    }
}

export default SetProductReducer;