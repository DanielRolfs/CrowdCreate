import { Route, Routes } from "react-router-dom"

import MainNavigate from "./MainNavigate";


function News() {
    return (
      <div className="News w-full h-full flex flex-col">
        <div className="grow">
         News
        </div>

        <div>
          <Routes>
            <Route path="" element={<MainNavigate/>} />
          </Routes>
        </div>
      </div>
    );
  }
  
  export default News;
  