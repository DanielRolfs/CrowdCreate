import { useParams } from "react-router-dom"


function Tasks() {
    const { id } = useParams()


    return (
        <div>
            Tasks ohh yess
            {id}
        </div>

            );
}

export default Tasks;
