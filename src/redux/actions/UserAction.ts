export const setUser = (user: any = null) => {
    return {
        type: 'set',
        user: user
    };
}

export const logout = () => {
    return {
        type: 'set',
        user: null
    };
}