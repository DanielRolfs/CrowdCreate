import { Route, Routes } from "react-router-dom"

import MainNavigate from "./MainNavigate";


function Profile() {
    return (
      <div className="Profile w-full">
        Profile

        <Routes>
          <Route path="" element={<MainNavigate/>} />
        </Routes>
      </div>
    );
  }
  
  export default Profile;
  