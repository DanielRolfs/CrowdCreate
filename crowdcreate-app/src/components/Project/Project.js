import { useParams, useLocation, Link } from "react-router-dom"
import { Tab } from '@headlessui/react'



function Project({ projects }) {
    const { id } = useParams()
    const projectdata = useLocation()

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }



    console.log("data", projectdata)


    return (
        <div className="Project w-full h-full flex flex-col">
            {/* {id} */}

            {/* Head Area */}
            <div className="header h-14 flex items-center flex-none justify-start">
                <h1 className="flex-auto text-3xl">{projectdata.state.title}</h1>
                <div className="fixed w-12 text-2xl">
                    <Link to={`/projectlist`}>
                        <button><img src="https://img.icons8.com/ios-glyphs/30/000000/back.png" /></button>
                    </Link>
                </div>
            </div>






            <div className="grow">
                <Tab.Group>
                    <Tab.List className="flex between devide-x w-full justify-center border-collapse">
                        <div><Tab className="border border-black text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-1 px-4 text-sm font-medium text-center hover:bg-gray-200 focus:z-10">Info</Tab></div>
                        <div><Tab className="border border-black text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-1 px-4 text-sm font-medium text-center hover:bg-gray-200 focus:z-10">Market</Tab></div>
                        <div><Tab className="border border-black text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-1 px-4 text-sm font-medium text-center hover:bg-gray-200 focus:z-10">Team</Tab></div>
                        <div><Tab className="border border-black text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-1 px-4 text-sm font-medium text-center hover:bg-gray-200 focus:z-10">Work</Tab></div>
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
                        <Tab.Panel><h2>Work</h2></Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>




        </div>
    );
}

export default Project;
