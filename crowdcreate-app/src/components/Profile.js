import { Route, Routes } from "react-router-dom"

import MainNavigate from "./MainNavigate";
import Account from '../components/Account';

function Profile() {
    return (
      <div className="Profile w-full h-full flex flex-col">
        <div className="grow">
          Profile
          <div>
          <Account/>
          </div>
        </div>

        <div>
          <Routes>
            <Route path="" element={<MainNavigate/>} />
          </Routes>
        </div>
      </div>
    );
  }
  
  export default Profile;
  