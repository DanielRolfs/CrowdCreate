import { Route, Routes } from "react-router-dom"
import MainHeader from "./Elements/mainHeader";
import MainNavigate from "./MainNavigate";
import Account from '../components/Account';

function Profile() {
    return (
      <div className="Favourites w-full h-full flex flex-col">
        <div className="flex-auto overflow-auto">
          <MainHeader headline="Profil">
            <div className=" w-12 text-2xl absolute left-0">

            </div>
            <div className=" w-12 text-2xl absolute right-0">
            </div>
          </MainHeader>

          <Account />
        </div>

        <div>
          <Routes>
            <Route path="" element={<MainNavigate />} />
          </Routes>
        </div>
      </div>
    );
  }
  
  export default Profile;
  
