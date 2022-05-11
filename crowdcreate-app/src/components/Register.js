import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from "../.firebase.config"
import { useState } from "react"
import { signOut } from "firebase/auth";
import { db } from "../.firebase.config"

import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore"

function Register() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [ user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const logout = async () => {

    await signOut(auth)
  }

  /* Write new registered person in user database */
 /*  const userCollectionRef = collection(db, "users") */
/*   const handleSubmit = e => {
    e.preventDefault()


    addDoc(userCollectionRef, form)

    setForm({
      taskName: "",
    })
  }

  const [form, setForm] = useState({
    uid: user.user.uid,
    firstName: "Test1",
  }) */

  const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth, 
          registerEmail, 
          registerPassword);
        console.log(user)
        
        console.log(user.user.uid)

       /*  handleSubmit() */
    
        logout()
      } catch (error) {
        console.log(error.message);
      }
  }






  return (
  <div>
      <div>
        <div>
          Register
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            
              <div>
                <label for="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
                <div className="mt-1">
                  <input onChange={(event) => {setRegisterEmail(event.target.value)}} id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <label for="password" className="block text-sm font-medium text-gray-700"> Password </label>
                <div className="mt-1">
                  <input onChange={(event) => { setRegisterPassword(event.target.value) }} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                <label for="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
              </div> */}

                <div className="text-sm">
                  <Link to={`/login`}>
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Already have an account? </a>
                  </Link>
                </div>
              </div>

              <div>
                <button onClick={register} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
              </div>
            
            {/*   {user.email} */}
          </div>
        </div>
      </div>
  </div>
      );
}

export default Register;