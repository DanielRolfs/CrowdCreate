import { Link } from "react-router-dom"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../.firebase.config"

function Register() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth, 
          registerEmail, 
          registerPassword);
        console.log(user)
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
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">E-Mail</label>
                <div class="mt-1">
                  <input onChange={(event) => {setRegisterEmail(event.target.value)}} id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                <div class="mt-1">
                  <input onChange={(event) => { setRegisterPassword(event.target.value) }} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div class="flex items-center justify-between">
                {/* <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
              </div> */}

                <div class="text-sm">
                  <Link to={`/login`}>
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Already have an account? </a>
                  </Link>
                </div>
              </div>

              <div>
                <button onClick={register} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
              </div>
            
              {auth.currentUser.email}
          </div>
        </div>
      </div>
  </div>
      );
}

export default Register;