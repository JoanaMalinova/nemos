import { firebaseApp } from "../firebase_setup/firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";

const db = getFirestore(firebaseApp);


export const getAllItems = async () => {

    const result = [];

    const querySnapshot = await getDocs(collection(db, "store"));

    querySnapshot.forEach((doc) => {
        result.push(doc.data());
    });

}

export const getAllFish = async () => {

    const q = query(collection(db, "cities"), where("capital", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });

}


export const getAllInvertebrate = async () => {

    const q = query(collection(db, "cities"), where("capital", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });

}

export const getAllCoral = () => {

}

export const getAllDecoration = () => {

}