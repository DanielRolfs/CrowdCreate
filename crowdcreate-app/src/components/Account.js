import { signOut } from "firebase/auth";
import { auth } from "../.firebase.config"

function Account() {

  const logout = async () => {

    await signOut(auth)
  }

  return (
    <div>
      <h1>Account</h1>
      <p>User Email:</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Account;