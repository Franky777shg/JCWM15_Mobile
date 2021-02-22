import { combineReducers } from 'redux'

import userReducer from './userReducer'
import productReducer from './productReducer'

const allReducer = combineReducers({
    userReducer,
    productReducer
})

export default allReducer