import { initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCeh_amKSQ7p-2ZjoRGXiJAtpbXp9TiR_o",
    authDomain: "crwn-clothing-db-25611.firebaseapp.com",
    projectId: "crwn-clothing-db-25611",
    storageBucket: "crwn-clothing-db-25611.appspot.com",
    messagingSenderId: "105628876557",
    appId: "1:105628876557:web:720579436a7ac2f6acfa44",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    promt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
    if(!userAuth) return

    const userDocRef = doc(db, "users", userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (err) {
            console.log("error creating the user", err.message)
        }
    }
    return userDocRef
}



export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email||!password)return

    return await createUserWithEmailAndPassword(auth,email,password)
}