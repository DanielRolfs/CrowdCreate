import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./.firebase.config"
import { useState } from "react"
import { Navigate, Outlet } from 'react-router-dom'
import { useLocation } from "react-router"


function ProtectedRoutes() {

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

/*     const location = useLocation() */
    
    return (
        user ? <Outlet /> : <Navigate to="/login" /* replace state={{from: location}} */ />
    )


}
    
export default ProtectedRoutes;
