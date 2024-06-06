import Contact from "./Contact";
import { Link } from "react-router-dom";
function Contacts() {
  return (
    <div className="bg-[#dfd3d3] p-[2em] mt-[3em]">
      <div>
        <ul className=" flex justify-around border-[green] border-b-2 border-t-2 mt-[2em] p-[1em]">
          <li>Name</li>
          <li>Address</li>
          <li>Category</li>
          <li>Phone no</li>
        </ul>
      </div>
      <div>
        <Link to="/singlecontact">
          <Contact />
        </Link>
        <Link to="/singlecontact">
          <Contact />
        </Link>
        <Link to="/singlecontact">
          <Contact />
        </Link>
        <Link to="/singlecontact">
          <Contact />
        </Link>
        <Link to="/singlecontact">
          <Contact />
        </Link>
        <Link to="/singlecontact">
          <Contact />
        </Link>
        <Link to="/singlecontact">
          <Contact />
        </Link>
        <var><Link to="/singlecontact">
          <Contact />
        </Link></var>
        <Link to="/singlecontact">
          <Contact />
        </Link>
        <Link to="/singlecontact">
          <Contact />
        </Link>
        <Link to="/singlecontact">
          <Contact />
        </Link>
        {/* <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact /> */}
      </div>
    </div>
  );
}
export default Contacts;
