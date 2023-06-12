
const initState = []

const ProductReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case 'ADD_PRODUCT':
            return payload
    
        default:
            return state;
    }

}

export default ProductReducer