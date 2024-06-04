import Dashleft from "../components/Dashleft";
import Singlecontact from "../components/Singlecontact";
function SingleContact() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-[100%]  h-[80%] ">
        <Dashleft />
      </div>
      <div className="ml-[20%]">
;        <Singlecontact />
      </div>
    </div>
  );
}
export default SingleContact;
