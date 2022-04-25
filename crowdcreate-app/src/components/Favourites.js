import { Route, Routes } from "react-router-dom"

import MainNavigate from "./MainNavigate";


function Favourites() {
    return (
      <div className="Favourites">
        Favourites

        <Routes>
          <Route path="" element={<MainNavigate/>} />
        </Routes>
      </div>
    );
  }
  
  export default Favourites;
  