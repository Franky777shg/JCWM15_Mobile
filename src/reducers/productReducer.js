const INITIAL_STATE = {
    product: [],
    carousel: []
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PRODUCT':
            return {
                ...state,
                product: action.payload
            }
        case 'GET_CAROUSEL':
            return {
                ...state,
                carousel: action.payload
            }
        default:
            return state
    }
}

export default productReducer