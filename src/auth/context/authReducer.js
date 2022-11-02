export const authReducer = (state, action) => {
    switch (action.type) {
        case "login":

            return {
                ...state,
                logged: true,
                user: action.payload
            }
        case "logout":

            return {
                logged: false
            }

        default:
            return state;
    }
}
