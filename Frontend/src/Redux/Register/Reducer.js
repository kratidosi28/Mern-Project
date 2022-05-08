import { ACTION_TYPES } from './Actions';

const initState = {
    isLoggedIn  : localStorage.getItem('isLoggedIn')? (localStorage.getItem('isLoggedIn') === "true" ) : false,
    accessToken  : localStorage.getItem('accessToken') || "",
    userId  : localStorage.getItem('userId') || ""
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN_USER:
            return {
                ...state,
                isLoggedIn  : true,
                accessToken : action.accessToken,
                userId:action.userId
            };

        case ACTION_TYPES.LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false
            };
        
        default:
            return state;
    }
    
}

export default Reducer;