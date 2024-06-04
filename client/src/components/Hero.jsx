import Login from "./Login";
import { useState } from "react";

function Hero({ open, setOpen }) {
  // const [open, setOpen] = useState({ login: false });
  return (
    <div>
      <div className="flex justify-around flex-wrap container mx-[auto]">
        <div>
          <img
            src="src/assets/images/phoneon.jpeg"
            className="w-[800px] container hidden sm:flex"
          />
        </div>
        <div className="py-[10em]">
          <h1 className="text-[green] text-[2.5em] font-bold">Contacto</h1>
          <p className="py-[2em] w-[70%]">
            we are here to help you connect with friends and family all at one
            place.{" "}
          </p>
          <button className="text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl">
            Read More
          </button>
        </div>
        {/* <div>{open.login ? <Login setOpen={setOpen} open={open} /> : null}</div> */}
      </div>
    </div>
  );
}
export default Hero;
