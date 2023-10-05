import { firebaseApp } from "../firebase_setup/firebase";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const db = getFirestore(firebaseApp);


export const addItemToCart = async (itemId, userId) => {

    const itemRef = doc(db, "store", itemId);

    if (userId) {
        userId = 
        await updateDoc(itemRef, {
            inCarts: arrayUnion(userId)
        });
    }

}

export const removeFromCart = async (itemId, userId) => {

    const itemRef = doc(db, "store", itemId);

    if (userId) {
        await updateDoc(itemRef, {
            inCart: arrayRemove(userId)
        });
    }
}

export const getItemsFromCart = () => {

}