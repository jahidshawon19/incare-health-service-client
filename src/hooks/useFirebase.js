import { useEffect, useState } from 'react'
import initializeFirebase from '../Pages/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";




initializeFirebase()

const useFirebase = () =>{

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
 

    const auth = getAuth()


    // register function

    const registerUser = (email, password) =>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
           
          setAuthError('')
        
          })
          .catch((error) => {
            
             setAuthError(error.message);
            // ..
          })

          .finally( ()=> setIsLoading(false));
    }



    // login function 

    const loginUser = (email, password, location, history) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          const destination = location?.state?.from || '/'
          history.replace(destination)

          setAuthError('')
          })
          .catch((error) => {
         
            setAuthError(error.message);
          })
          .finally( ()=> setIsLoading(false));
    }



    // observer user state 

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             
             
              setUser(user)
             
            } else {
             setUser({})
            }

            setIsLoading(false)
          });

          return () => unSubscribe
    }, [])




    // signOut function 

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( ()=> setIsLoading(false));

    }

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
    }


}

export default useFirebase