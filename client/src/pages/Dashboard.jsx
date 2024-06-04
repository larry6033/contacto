import Dashleft from "../components/Dashleft"
import Dashright from "../components/Dashright"

function Dashboard(){
    return(
        <div className="flex justify-between items-center">
            <Dashleft/>
            <div className="flex flex-col w-[100%]  h-[80%] ml-[-65%] ">
            <Dashright />
            </div>
        </div>
    )
}
export default Dashboard