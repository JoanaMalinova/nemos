import { firebaseApp } from "../firebase_setup/firebase";
import { getFirestore, limit } from "firebase/firestore";
import { collection, getDocs, query, orderBy } from "firebase/firestore";


const db = getFirestore(firebaseApp);


export const getBestSellers = async () => {

    let result = [];

    const itemsSnapshot = await getDocs(query(collection(db, "store"), orderBy("sold", "desc"), limit(6)));

    itemsSnapshot.forEach((doc) => {
        result.push(doc.data());
    });

    return result;
}


export const getDiscountItems = async () => {
    let result = [];

    const itemsSnapshot = await getDocs(query(collection(db, "store"), orderBy("discount")));

    itemsSnapshot.forEach((doc) => {
        result.push(doc.data());
    });

    return result;
}


export const getNewestItems = async () => {

    let result = [];

    const itemsSnapshot = await getDocs(query(collection(db, "store"), orderBy("createdOn", "desc"), limit(8)));

    itemsSnapshot.forEach((doc) => {
        result.push(doc.data());
    });

    return result;

}