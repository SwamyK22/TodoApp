
const initCartState = []

const cartReducer = (state = initCartState, { type, payload }) => {
    switch(type) {
        case 'ADD_CART':
            return [...state, payload];
        case 'UPDATE_CART':{
                const index = state.findIndex((x) => x.productId === payload.productId);
                return [
                  ...state.slice(0, index),
                  payload,
                  ...state.slice(index + 1),
                ];
              };
        case 'DELETE_CART':{
                const index = state.findIndex((x) => x.productId === payload.productId);
                return [
                  ...state.slice(0, index),
                  ...state.slice(index + 1),
                ];
              };
        default :
            return state;
    }
};

export default cartReducer