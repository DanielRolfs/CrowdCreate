import { Route, Routes } from "react-router-dom"

import MainNavigate from "./MainNavigate";


function Favourites() {
    return (
      <div className="Favourites w-full">
        Favourites

        <Routes>
          <Route path="" element={<MainNavigate/>} />
        </Routes>
      </div>
    );
  }
  
  export default Favourites;
  