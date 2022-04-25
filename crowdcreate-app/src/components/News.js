import { Route, Routes } from "react-router-dom"

import MainNavigate from "./MainNavigate";


function News() {
    return (
      <div className="News w-full">
        News

        <Routes>
          <Route path="" element={<MainNavigate/>} />
        </Routes>
      </div>
    );
  }
  
  export default News;
  