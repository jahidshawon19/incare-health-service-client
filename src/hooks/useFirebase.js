import { useEffect, useState } from 'react'
import initializeFirebase from '../Pages/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,updateProfile, getIdToken    } from "firebase/auth";




initializeFirebase()

const useFirebase = () =>{

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')
 

    
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();



    //################################### REGISTER FUNCTION START #################################################// 

    const registerUser = (email, password, name, history) =>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
           
          setAuthError('')
          const newUser = {email, displayName: name,}
          setUser(newUser)

          

          saveUser(email, name, 'POST') // CALL SAVE USER FUNCTION TO STORE IT IN THE DATABASE

          
          updateProfile(auth.currentUser, {
            displayName: name,
          
          })
          .then(() => {
           
          })
          .catch((error) => {
         
          });


          history.replace('/')
        
          })
          .catch((error) => {
            
             setAuthError(error.message);
            // ..
          })

          .finally( ()=> setIsLoading(false));
    }

   // ################################################# REGISTER FUNCTION END  ####################################// 


 

   // ################################################ LOGIN FUNCTION START ################################################# // 

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


   // ################################################ LOGIN FUNCTION END ################################################## // 





   // #################################################### GOOGLE SIGN IN START ###################################### // 

    const signInWithGoogle= (location, history) =>{
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
      .then((result) => {
      
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT') // CALL SAVE USER FUNCTION TO STORE IT IN THE DATABASE
     
        
        setAuthError('')
      }).catch((error) => {
       
        setAuthError(error.message);
      })
      .finally( ()=> setIsLoading(false));
    }


   // ####################################################### GOOGLE SIGN IN END ####################################### // 




    // ############################################### OBSERVER USER STATE START ################################### //

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              getIdToken(user)
              .then(idToken =>{
                setToken(idToken)
              })
             
            } else {
             setUser({})
            }

            setIsLoading(false)
          });

          return () => unSubscribe
    }, [])

  // ##################################################### OBSERVER USER STATE END ################################# // 


  useEffect(() =>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  },[user.email])






  //  SIGNOUT FUNCTION START 

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( ()=> setIsLoading(false));

    }

      //  SIGNOUT FUNCTION END 





        // SAVE USER FUNCTION START 

   const saveUser = (email, displayName, method) =>{

    const user = {email, displayName} // just create a user object here 

    fetch('http://localhost:5000/users', {

    method: method,
    headers: {
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
    })

    
 }


        // SAVE USER FUNCTION END


  




    return {
        user,
        admin,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle,
        token,
    }


}

export default useFirebase