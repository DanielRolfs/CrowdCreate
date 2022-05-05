import { useParams } from "react-router-dom"
import { db } from "../../.firebase.config"
import { useState, useEffect } from "react"

import {
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    addDoc,
    deleteDoc
} from "firebase/firestore"

function Tasks() {
    const { id } = useParams()
    const [tasks, setTasks] = useState([])

    const tasksCollectionRef = collection(db, "tasks")
     useEffect(() => {
     
        const q = query(tasksCollectionRef, orderBy("taskName", "asc"))

         const unsub = onSnapshot(q, snapshot => {
             setTasks(snapshot.docs.map(doc => {
                 return {
                     id: doc.id,
                     viewing: false,
                     ...doc.data()
                 }
             }))
     
        return unsub;
     
        /*   onSnapshot(tasksCollectionRef, snapshot => {
            setTasks(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()
                }
            })) */
        })
    }, []) 
    console.log("Tasks",tasksCollectionRef)
    

    return (
        <div>
            Tasks ohh yess
            {id}
            <div>
                { tasks.map((task, i) => (
                    <div div > { task.taskName } </div>

                ))}
            </div>
        </div>

    );
}

export default Tasks;
