import { useSelector } from "react-redux";

export const IsUserLoggedIn = () => {
    return useSelector((state: any) => state?.user != null);
}