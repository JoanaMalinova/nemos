import { onAuthStateChanged } from "firebase/auth"

export const useAuth = () => {

    onAuthStateChanged((user) => {
        if (user){
            sessionStorage.setItem("user", JSON.stringify(user));
        }
    })
    
    return JSON.parse(sessionStorage.getItem("user"));
}