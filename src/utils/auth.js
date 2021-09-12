import { 
    firestore, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword 
} from "../configs/firebase";

const signIn = (email, password) => {
    return signInWithEmailAndPassword(email, password)
}

const signUp = (data) => {
    const {
        email,
        password,
    } = data
    return createUserWithEmailAndPassword(email, password).then(() => {
        return firestore.collection('users').add(data)
        .then(() => {
            console.log("Added user")
            return true
        }).catch(err => console.error(err))
    })
}