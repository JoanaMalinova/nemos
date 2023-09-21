import { firebaseApp } from "../firebase_setup/firebase";
import { getFirestore, startAfter } from "firebase/firestore";
import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";

const db = getFirestore(firebaseApp);

let lastVisible;
let result = []

export const getAllItems = async () => {

    const allItemsSnapshot = await getDocs(collection(db, "store"), orderBy("createdOn"), limit(3));

    allItemsSnapshot.forEach((doc) => {
        result.push(doc.data());
    });

    return result;
}

export const getAllFromType = async (type) => {

    let q = query(collection(db, "store"), where("type", "==", type), orderBy("createdOn"), limit(3));

    if (lastVisible) {

        q = query(collection(db, "store"), where("type", "==", type), orderBy("createdOn"), startAfter(lastVisible), limit(3));
    }

    const querySnapshot = await getDocs(q);

    lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    querySnapshot.forEach((doc) => {
        result.push(doc.data());
    });

    return result;

}









