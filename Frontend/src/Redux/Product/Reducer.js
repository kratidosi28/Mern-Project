import { ACTION_TYPES } from './Actions';

const initState = {
    blogList  : [],
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.BLOG_LIST:
            return {
                ...state,
                blogList  : action.data
            };
        
        default:
            return state;
    }
    
}

export default Reducer;