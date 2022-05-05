import { useParams, useLocation, Link } from "react-router-dom"
import { Tab } from '@headlessui/react'
import MainHeader from "../Elements/mainHeader";
import Tasks from "./Tasks";
import { useState } from "react"
import { db } from "../../.firebase.config"
import {
    collection,
    onSnapshot,
    doc,
    addDoc,
    deleteDoc
} from "firebase/firestore"



function Project({ projects }) {
    const { id } = useParams()
    const projectdata = useLocation()

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    
    const [currentTab, setCurrentTab] = useState("0")
    const [createTaskActive, setCreateTaskActive] = useState(false)
    console.log("Status", createTaskActive)

/*     console.log("data", projectdata) */


    const [form, setForm] = useState({
        project: id,
        taskName: "",
    })

    const tasksCollectionRef = collection(db, "tasks")
    const handleSubmit = e => {
        e.preventDefault()

        if (
            !form.taskName
        ) {
            alert("Please fill out all fields")
            return
        }

        addDoc(tasksCollectionRef, form)

        setForm({
            taskName: "",
        })


        setCreateTaskActive(false)
    }


    return (
        <div className="Project w-full h-full flex flex-col">
            {/* {id} */}

            {/* Head Area */}
            <MainHeader headline={projectdata.state.title}>
                <div className=" w-12 text-2xl absolute left-0">
                    <Link to={`/projectlist`}>
                        <button><img src="https://img.icons8.com/ios-glyphs/30/000000/back.png" /></button>
                    </Link>
                </div>
                <div className=" w-12 text-2xl absolute right-0">
                   {/*  {console.log('Changed selected tab to:', currentTab)} */}
                    {currentTab == '0' && 
                        <button /* onClick={() => setCreateProjectActive(!createProjectActive)} */ className=""><img src="https://img.icons8.com/ios-glyphs/30/000000/share-rounded.png" /> </button>
                    }
                    {currentTab == '1' && 
                        <div>M</div>
                    }
                    {currentTab == '2' && <div>Te</div>}
                    {currentTab == '3' && 
                        <button onClick={() => setCreateTaskActive(!createTaskActive)} className="">+</button>
                    }
                </div>
            </MainHeader>

            



            <div className="grow">
                <Tab.Group
                    onChange={(index) => { setCurrentTab(index) }}
               >
                    <Tab.List className="flex between devide-x w-full justify-center border-collapse">
                        <div><Tab className="border border-black text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-1 px-4 text-sm font-medium text-center hover:bg-gray-200 focus:z-10">Info</Tab></div>
                        <div><Tab className="border border-black text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-1 px-4 text-sm font-medium text-center hover:bg-gray-200 focus:z-10">Market</Tab></div>
                        <div><Tab className="border border-black text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-1 px-4 text-sm font-medium text-center hover:bg-gray-200 focus:z-10">Team</Tab></div>
                        <div><Tab className="border border-black text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-1 px-4 text-sm font-medium text-center hover:bg-gray-200 focus:z-10">Tasks</Tab></div>
                    </Tab.List>
                    <Tab.Panels className="flex-1 mt-2">
                        <Tab.Panel>
                            <div>
                                <h2 className="font-bold">Info</h2>
                                <div className="mt-4">{projectdata.state.longDescription}</div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel><h2>Market</h2></Tab.Panel>
                        <Tab.Panel><h2>Team</h2></Tab.Panel>
                        <Tab.Panel><h2><Tasks createTaskActive={createTaskActive} onCreateTaskChange={setCreateTaskActive}/></h2></Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>


            {/* Create Add Task Popup */}
            {createTaskActive && <div className="createProjectPopup w-screen h-screen sm:w-[390px] sm:h-[844px] fixed bg-white">
                <div className="popup-inner">
                    <div className="header h-14 border-b-2 flex items-center flex justify-end">
                        <h1 className="flex-auto text-3xl">Create Task</h1>
                        <div className="fixed w-12 text-lg">
                            <button type="button" onClick={() => setCreateTaskActive(false)}>X</button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Task Name</label>
                            <textarea
                                type="text"
                                value={form.taskName}
                                onChange={e => setForm({ ...form, taskName: e.target.value })}
                                className="border-2"
                            />
                        </div>

                        <div className="buttons">
                            <button type="submit">Submit</button>

                        </div>

                    </form>

                </div>
            </div>}

        </div>
    );
}

export default Project;
