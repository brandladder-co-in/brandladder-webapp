import { createContext, useContext } from "react";
import { db } from "../config/firebaseConfig";
import {
    collection,
    getDocs,
    // addDoc,
    // updateDoc,
    deleteDoc,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

const FirestoreContext = createContext();

export function useFirestore() {
    return useContext(FirestoreContext);
}

export function FirestoreProvider({ children }) {

    const uploadUserData = async (collectionName, docId, data) => {
        try {
            const docRef = doc(db, collectionName, docId);
            await setDoc(docRef, data);

            return true;
        } catch (error) {
            console.error("Error adding document: ", error);
            return false;
        }
    };

    const uploadEmptyDocument = async (collectionName, docId) => {
        try {
            const docRef = doc(db, collectionName, docId);
            await setDoc(docRef, {});
            console.error("Empty document successfully uploaded!");
            return true;
        } catch (error) {
            console.error("Error uploading empty document: ", error);
            return false;
        }
    };

    const uploadNestedData = async (collectionName, docId, subcollectionName, subdocId, fieldsData) => {
        try {
            // Get a reference to the main document
            const docRef = doc(db, collectionName, docId);

            // Get a reference to the subcollection
            const subcollectionRef = collection(docRef, subcollectionName);

            // Add a new document to the subcollection
            const subdocRef = doc(subcollectionRef, subdocId);

            // Update the fields inside the subdocument
            await setDoc(subdocRef, fieldsData, { merge: true });

            console.error("Nested data successfully uploaded!");
            return true;
        } catch (error) {
            console.error("Error uploading nested data: ", error);
            return false;
        }
    };

    const getTeamData = async (collectionName) => {

        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            return data;
        } catch (error) {
            console.error("Error getting documents: ", error);
            return [];
        }
    };

    const getDocumentData = async (collectionName, docId) => {
        try {
            const docRef = doc(db, collectionName, docId);
            const docSnapshot = await getDoc(docRef);
            if (docSnapshot.exists()) {
                return docSnapshot.data();
            } else {
                console.error("Document does not exist");
                return null;
            }
        } catch (error) {
            console.error("Error getting document: ", error);
            return null;
        }
    };

    const getAllDocumentIds = async (collectionName) => {
        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            const ids = [];
            querySnapshot.forEach((doc) => {
                ids.push(doc.id);
            });
            return ids;
        } catch (error) {
            console.error("Error getting document IDs: ", error);
            return [];
        }
    };

    const getAllSubdocumentData = async (collectionName, docId, subcollectionName) => {
        try {
            const docRef = doc(db, collectionName, docId);
            const subcollectionRef = collection(docRef, subcollectionName);
            const querySnapshot = await getDocs(subcollectionRef);
            const subdocuments = [];
            querySnapshot.forEach((subdoc) => {
                subdocuments.push({ id: subdoc.id, ...subdoc.data() });
            });
            return subdocuments;
        } catch (error) {
            console.error("Error getting all subdocuments data: ", error);
            return [];
        }
    };

    const fetchAllDocumentIdsAndData = async (collectionName) => {
        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            const documents = [];

            querySnapshot.forEach((doc) => {
                documents.push({
                    id: doc.id,
                    data: doc.data()
                });
            });

            return documents;
        } catch (error) {
            console.error("Error getting document IDs and data: ", error);
            return [];
        }
    };

    const deleteSubdocument = async (collectionName, docId, subcollectionName, subdocId) => {
        try {
            const docRef = doc(db, collectionName, docId);
            const subdocRef = doc(collection(docRef, subcollectionName), subdocId);

            await deleteDoc(subdocRef);
            return true;
        } catch (error) {
            console.error("Error deleting subdocument: ", error);
            return false;
        }
    };


    const value = {
        uploadUserData,
        getTeamData,
        getDocumentData,
        getAllDocumentIds,
        fetchAllDocumentIdsAndData,
        uploadEmptyDocument,
        uploadNestedData,
        getAllSubdocumentData,
        deleteSubdocument
    };

    return (
        <FirestoreContext.Provider value={value}>
            {children}
        </FirestoreContext.Provider>
    );
}
