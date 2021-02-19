const INITIAL_STATE = {
    id: null,
    username: "",
    email: ""
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                id: action.payload.id_users,
                username: action.payload.username,
                email: action.payload.email
            }
        case 'LOGOUT':
            return INITIAL_STATE
        default:
            return state
    }
}

export default userReducer