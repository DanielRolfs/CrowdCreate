import { signOut } from "firebase/auth";
import { auth } from "../.firebase.config";
import { Link } from "react-router-dom";
import { useState } from "react";

function Account() {

  const [user, setUser] = useState({})

  const logout = async () => {

    await signOut(auth)
  }

  return (
    <div >

      <div className="flex flex-col ">
        <div className="flex flex-row justify-center">
          <p>First Name:</p>
          <p>Daniel</p>
        </div>
        <div className="flex flex-row justify-center">
          <p>Last Name:</p>
          <p>{user.user}</p>
        </div>
        <div className="flex flex-row justify-center">
          <p>User Email:</p>
          <p>danielrolfs@icloud.com</p>
        </div >
      </div>

      <Link to={`/login`}>
        <button onClick={logout}>Logout</button>
      </Link>
    </div>
  );
}

export default Account;