import { Route, Routes } from "react-router-dom"

import MainNavigate from "./MainNavigate";



function ProjectList() {
    return (
      <div className="ProjectList w-full h-full flex flex-col">
        <div className="header h-14">
          <h1>Projectlist</h1>
        </div>
        
        <div className="main flex-auto">
          <div>Project 1</div>
          <div>Project 2</div>
        </div>

        <div>
          <Routes>
            <Route path="" element={<MainNavigate/>} />
          </Routes>
        </div>
        
      </div>
      
    );
  }
  
  export default ProjectList;
  