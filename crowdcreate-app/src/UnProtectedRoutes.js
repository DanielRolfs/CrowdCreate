import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./.firebase.config"
import { useState } from "react"
import { Navigate, Outlet } from 'react-router-dom'



function UnProtectedRoutes() {

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })


    return (
        !user ? <Outlet /> : <Navigate to="/projectlist" />
    )


}

export default UnProtectedRoutes;
