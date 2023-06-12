
const userReducer = (state = null, { type, payload }) => {
    switch (type) {
        case 'ADD_USER':
            
            return payload;
    
        default:
            return state;
    }
}

export default userReducer;