import { firebaseApp } from "../firebase_setup/firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

const db = getFirestore(firebaseApp);

let result = []

export const getAllItems = async () => {

    const allItemsSnapshot = await getDocs(collection(db, "store"), orderBy("createdOn", "desc"));

    allItemsSnapshot.forEach((doc) => {
        result.push(doc.data());
    });

    return result;
}

export const getAllFromType = async (type) => {

    const itemsSnapshot = await getDocs(query(collection(db, "store"), where("type", "==", type), orderBy("createdOn", "desc")));

    itemsSnapshot.forEach((doc) => {
        result.push(doc.data());
    });

    return result;
}









