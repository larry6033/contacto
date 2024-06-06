import Dashleft from "./Dashleft";

function Categorycontacts() {
  return (
    <div className="flex justify-between">
      <Dashleft />
      <div className="flex justify-between">
        <div className="ml-[-80em] flex flex-col justify-center items-center h-[30vh]">
          <h1 className="text-[green] text-[2.5em]">Your Categories</h1>
        <h1>Family</h1>
        <h1>Friends</h1>
        </div>
      </div>
    </div>
  )
}
export default Categorycontacts;
