import { Route, Routes } from "react-router-dom"

import MainNavigate from "./MainNavigate";


function Favourites() {
    return (
      <div className="Favourites w-full h-full flex flex-col">
        <div className="grow">
          Favourites
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
  