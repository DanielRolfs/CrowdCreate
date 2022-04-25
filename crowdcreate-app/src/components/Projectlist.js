import { Route, Routes } from "react-router-dom"
import MainNavigate from "./MainNavigate";


import { db } from "./.firebase.config"
import { useState, useEffect } from "react"
import { 
  collection,
  onSnapshot
} from "firebase/firestore"


function ProjectList() {
    const [projects, setProjects] = useState([])
    const [form, setForm] = useState({
      title: "",
      shortDescription: "",
      category: []
    })
    const [createProjectActive, setCreateProjectActive] = useState(false)

    const projectsCollectionRef = collection(db, "projects")

    useEffect(() => {
      onSnapshot(projectsCollectionRef, snapshot => {
        setProjects(snapshot.docs.map(doc => {
          return {
            id: doc.id,
            viewing: false,
            ...doc.data()
          }
        }))
      })
    }, [])

    return (
      <div className="ProjectList w-full h-full flex flex-col">
         
        {/* Headline */} 
        <div className="header h-14 border-b-2 flex items-center flex justify-end">
          <h1 className="flex-auto text-3xl">Projectlist</h1>
          <div className="fixed w-12 text-2xl">
            <button>+</button>
            </div>
        </div>
          
        <div className="project flex-auto my-2 mx-2">
          {/* Project List */}

          <div className="projects">
            { projects.map((project, i) => (
                <div key={project.id} class="project flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div class="flex-shrink-0">
                    <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="test"/>
                  </div>
                  <div class="flex-1 bg-white p-2 flex flex-col justify-between">
                    <div class="flex-1">

                        <p class="text-2xl font-semibold text-gray-900">{project.title}</p>
                        <p class="text-lg text-gray-900">{project.shortDescription}</p>
                        <ul>
                          { project.category.map((category, i) => (
                            <li key={1}>{ category }</li>
                          ))}
                        </ul>

                    </div>
                    
                  </div>
                </div>
            ))}
          </div>
         
        </div>

        {/* Main Navigation */}
        <div>
          <Routes>
            <Route path="" element={<MainNavigate/>} />
          </Routes>
        </div>
        
      </div>
      
    );
  }
  
  export default ProjectList;
  