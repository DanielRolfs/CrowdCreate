import { Route, Routes } from "react-router-dom"
import MainNavigate from "./MainNavigate";


import { db } from "./.firebase.config"
import { useState, useEffect } from "react"
import { 
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc
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

    const handleSubmit = e => {
      e.preventDefault()

      if (
        !form.title ||
        !form.shortDescription
      ) {
        alert("Please fill out all fields")
        return
      }

      addDoc(projectsCollectionRef, form)

      setForm({
        title: "",
        shortDescription: "",
        category: ""
      })

      setCreateProjectActive(false)
    }

    const handleCategory = (e, i) => {
      const categoryClone = [...form.category]

      categoryClone[i] = e.target.vl

      setForm({
        ...form,
        category: categoryClone
      })
    }

    const handleCategoryCount = () => {
      setForm({
        ...form, 
        category: [...form.category, ""]})
    }

    const removeProject = id => {
      deleteDoc(doc(db, "projects", id))
    }


    return (
      <div className="ProjectList w-full h-full flex flex-col">
         
        {/* Headline */} 
        <div className="header h-14 border-b-2 flex items-center flex justify-end">
          <h1 className="flex-auto text-3xl">Projectlist</h1>
          <div className="fixed w-12 text-2xl">
            <button onClick={() => setCreateProjectActive(!createProjectActive)} className="">+</button>
            </div>
        </div>
          
        <div className="mainArea flex-auto mx-2 overflow-auto">
          {/* Project List */}

          <div className="projects py-2">
            { projects.map((project, i) => (
                <div key={project.id} className="project flex flex-col rounded-lg shadow-md overflow-hidden mb-4">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="test"/>
                  </div>
                  <div className="flex-1 bg-white p-2 flex flex-col justify-between">
                    <div className="flex-1">

                        <p className="text-2xl font-semibold text-gray-900">{project.title}</p>
                        <p className="text-lg text-gray-900">{project.shortDescription}</p>
                        {/* <ul>
                          { project.category.map((category, i) => (
                            <li key={1}>{ category }</li>
                          ))}
                        </ul> */}

                    </div>
                  <button className="removeProject" onClick={() => removeProject(project.id)}>X</button>
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
        
        {createProjectActive && <div className="createProjectPopup w-screen h-screen sm:w-[390px] sm:h-[844px] fixed bg-white">
            <div className="popup-inner">
              <div className="header h-14 border-b-2 flex items-center flex justify-end">
                <h1 className="flex-auto text-3xl">Create Project</h1>
                <div className="fixed w-12 text-lg">
                <button type="button" onClick={() => setCreateProjectActive(false)}>X</button>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                  <label>Title</label>
                  <input 
                    type="text"
                    value={form.title}
                    onChange={e => setForm({...form, title: e.target.value})} 
                    className="border-2"
                  />
                </div>

              <div className="form-group">
                <label>Short Description</label>
                <textarea
                  type="text"
                  value={form.shortDescription}
                  onChange={e => setForm({ ...form, shortDescription: e.target.value })}
                  className="border-2"
                />
              </div>

{/*               <div className="form-group">
                <label>Categorys</label>
                {
                  form.category.map((category, i) => (
                    <input
                      type="text"
                      key={i}
                      value={category}
                      onChange={e => handleCategory(e, i)} 
                      className="border-2"
                    />
                  ))
                }
                <button type="button" onClick={handleCategoryCount}>Add Category</button>
              </div> */}

              <div className="buttons">
                <button type="submit">Submit</button>
                {/* <button type="button" onClick={() => setCreateProjectActive(false)}>Close</button> */}
              </div>

              </form>

            </div>
        </div>}

      </div>
    );
  }
  
  export default ProjectList;
  