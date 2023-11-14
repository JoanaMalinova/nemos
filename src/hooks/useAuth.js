import { onAuthStateChanged, getAuth } from "firebase/auth"

export const useAuth = () => {

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user){
            sessionStorage.setItem("user", JSON.stringify(user));
        }
    })
    
    return JSON.parse(sessionStorage.getItem("user"));
}