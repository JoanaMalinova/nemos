import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD4DUx2gSodBR21zo6dzGEKQtlcJrkNUU0",
    authDomain: "nemos-663db.firebaseapp.com",
    projectId: "nemos-663db",
    storageBucket: "nemos-663db.appspot.com",
    messagingSenderId: "408272238149",
    appId: "1:408272238149:web:832fb7c422372f7079552c",
    measurementId: "G-FBLLM39EW3"
};

export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
