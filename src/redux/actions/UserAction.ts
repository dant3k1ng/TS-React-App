import { IUser } from "../../entities/User";

export const setUser = (user: IUser|null = null) => {
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