import { Route, Routes } from "react-router-dom"
import MainHeader from "./Elements/mainHeader";

import MainNavigate from "./MainNavigate";


function Favourites() {
    return (
      <div className="Favourites w-full h-full flex flex-col">
        <div className="flex-auto overflow-auto">
          <MainHeader headline="Favourites">
            <div className=" w-12 text-2xl absolute left-0">

            </div>
            <div className=" w-12 text-2xl absolute right-0">
            </div>
          </MainHeader>
          

        </div>

        <div>
          <Routes>
            <Route path="" element={<MainNavigate/>} />
          </Routes>
        </div>
      </div>
    );
  }
  
  export default Favourites;
  