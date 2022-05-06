import { signOut } from "firebase/auth";
import { auth } from "../.firebase.config";
import { Link } from "react-router-dom"

function Account() {

  const logout = async () => {

    await signOut(auth)
  }

  return (
    <div>
      <h1>Account</h1>
      <p>User Email:</p>
      <Link to={`/login`}>
        <button onClick={logout}>Logout</button>
      </Link>
    </div>
  );
}

export default Account;