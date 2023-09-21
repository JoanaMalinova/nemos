import { firebaseApp } from "../firebase_setup/firebase";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where, orderBy, doc, getDoc } from "firebase/firestore";


const db = getFirestore(firebaseApp);

export const getAllItems = async () => {

    let result = [];

    const allItemsSnapshot = await getDocs(collection(db, "store"), orderBy("createdOn", "desc"));

    allItemsSnapshot.forEach((doc) => {
        result.push(doc.data());
    });

    return result;
}

export const getAllFromType = async (type) => {

    let result = [];

    const itemsSnapshot = await getDocs(query(collection(db, "store"), where("type", "==", type), orderBy("createdOn", "desc")));

    itemsSnapshot.forEach((doc) => {
        result.push(doc.data());
    });

    return result;
}

export const getOne = async (itemId) => {

    const itemRef = doc(db, "store", itemId);
    const itemSnap = await getDoc(itemRef);

    if (itemSnap.exists()) {
        return itemSnap.data();

    } else {
        throw new Error("No such document!")
    }

}









