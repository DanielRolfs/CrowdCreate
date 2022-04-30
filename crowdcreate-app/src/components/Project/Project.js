import { useParams } from "react-router-dom"
import { Tab } from '@headlessui/react'


function Project({projects}) {
    const { id } = useParams()

    return (
        <div className="Project w-full">
            {id}
            {/* { projects.filter(project => project.id === id).map(project => (
                <div>
                    {project.}
                </div>
            ))} */}



            <Tab.Group>
                <Tab.List>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            

            

            
        </div>
    );
}

export default Project;
