export const ACTION_TYPES = {
    BLOG_LIST      : "BLOG_LIST",
}

export const blogList = (data) => {
    // SET YOUR PRODUCT INFO HERE
    localStorage.setItem('blogList', true)
    return {
        type : ACTION_TYPES.BLOG_LIST,
        data :data,
        ...data
    }
}