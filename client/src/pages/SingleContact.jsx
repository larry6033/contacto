import Dashleft from "../components/Dashleft";
import Singlecontact from "../components/Singlecontact";
function SingleContact() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-[100%]  h-[80%] ">
        <Dashleft />
      </div>
      <div className="ml-[-80em] flex flex-col justify-center items-center h-[80vh]">
        <div className="ml-[-150em] flex flex-col justify-center items-center h-[80vh]">
          ;{" "}
          <Singlecontact className="ml-[-80em] flex flex-col justify-center items-center h-[80vh]" />
        </div>
      </div>
    </div>
  );
}
export default SingleContact;
