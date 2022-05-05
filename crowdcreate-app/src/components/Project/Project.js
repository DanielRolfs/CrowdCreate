import { useParams, useLocation, Link } from "react-router-dom"
import { Tab } from '@headlessui/react'
import MainHeader from "../Elements/mainHeader";
import Tasks from "./Tasks";
import { useState } from "react"



function Project({ projects }) {
    const { id } = useParams()
    const projectdata = useLocation()

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    
    const [currentTab, setCurrentTab] = useState("")


/*     console.log("data", projectdata) */



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
                    {console.log('Changed selected tab to:', currentTab)}
                    {currentTab == '0' && <div>I</div>}
                    {currentTab == '1' && <div>M</div>}
                    {currentTab == '2' && <div>Te</div>}
                    {currentTab == '3' && <div>Ta</div>}
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
                        <Tab.Panel><h2><Tasks/></h2></Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>




        </div>
    );
}

export default Project;
