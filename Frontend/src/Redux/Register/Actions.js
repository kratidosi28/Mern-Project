export const ACTION_TYPES = {
    REGISTER_USER : "REGISTER_USER",
}

export const registerUser = (data) => {
    // SET YOUR LOGIN INFO HERE
    localStorage.setItem('isLoggedIn', true)
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('userId', data.userId);
    return {
        type : ACTION_TYPES.LOGIN_USER,
        ...data
    }
}

export const logOutUser = () => {
    localStorage.clear();
    return {
        type : ACTION_TYPES.LOGOUT_USER,
    }
}