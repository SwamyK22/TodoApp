
const nameReducer = (state = null, {type, payload}) => {
    if(type === 'NAME') {
        return payload
    }
    else {
        return state
    }
};

export default nameReducer