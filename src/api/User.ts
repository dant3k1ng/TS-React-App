export const getUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
}

export interface IUserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface IUserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    address: IUserAddress;
    phone: string;
    website: string;
    company: IUserCompany;
}