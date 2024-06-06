import Dashleft from "../components/Dashleft";
import AddContact from "../components/Addcontact";
function Addcontact() {
  return (
    <div className="flex flex-between">
        <div className="flex flex-col w-[100%]  h-[80%] hidden sm:flex  ">
      <Dashleft />
      </div>
      <div className="ml-[-80em] flex flex-col justify-center items-center h-[80vh]">
      <AddContact/>
      </div>
    </div>
  );
}
export default Addcontact;
