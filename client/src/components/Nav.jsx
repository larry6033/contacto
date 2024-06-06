import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

function Nav() {
  // const [open, setOpen] = useState({ login: false });
  return (
    <div className="bg-[green]">
      <div className="container  mx-[auto] flex justify-between items-center">
        <div className="">
          <Link to="/">
            {" "}
            <img
              src="src/assets/images/2.png"
              className="w-[100px] container"
            />
          </Link>
        </div>
        <ul className="text-white flex justify-between gap-[3em] sm:flex hidden">
          
          {/* <Link to="/contact">
            {" "}
            <li className="text-[1.5em]">Contacts</li>
          </Link> */}
          {/* <Link to="/category">
            {" "}
            <li className="text-[1.5em]">Categories</li>
          </Link> */}
        </ul>
        <div className="flex gap-[2em] sm:flex hidden">
          <ul className="flex justify-between gap-[3em] sm:flex hidden">
        <Link to="/">
            {" "}
            <li className="text-[1.5em] text-white">Home</li>
          </Link>
          <Link to="/dashboard">
            {" "}
            <li className="text-[1.5em] text-white">Dashboard</li>
          </Link>
          </ul>
          <Link to="/signup">
            {" "}
            <button className="text-[1.5em] text-white">Signup</button>
          </Link>
          <Link to="/login">
            {" "}
            <button className="text-[1.5em] text-white">Login</button>
          </Link>

          {/* <button
            // onClick={() => setOpen((prev) => ({ ...prev, login: true }))}
            className="text-[1.5em] text-white"
          >
            Login
          </button> */}
        </div>
        <BsThreeDotsVertical className="text-[white] text-[2em] sm:hidden" />
      </div>
     
    </div>
    
  );
}
export default Nav;
