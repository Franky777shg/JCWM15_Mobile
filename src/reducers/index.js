import { combineReducers } from 'redux'

import userReducer from './userReducer'

const allReducer = combineReducers({
    userReducer
})

export default allReducer