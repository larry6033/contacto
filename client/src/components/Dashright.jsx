import Contacts from "./Contacts";
import { Link } from "react-router-dom";
function Dashright() {
  return (
    <div className="w-[100%] mt-[3em]">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search contacts"
          className="rounded-full border-[green] border-2 pr-[8em] pl-[2em]"
        />
        <Link to="/addcontact">
          {" "}
          <button className="text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl">
            Add Contacts
          </button>
        </Link>
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
}
export default Dashright;
