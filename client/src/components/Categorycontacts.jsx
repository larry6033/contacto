import { Link } from "react-router-dom";
import Dashleft from "./Dashleft";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Categorycontacts() {
  const [errorMessage, setErrorMessage] = useState("");

  function handlecategory(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // navigate("/login")
    fetch("http://127.0.0.1:8000/api/category/").then((res)=>res.json()).then((data)=>console.log(data))

  }



  return (
    <div className="flex justify-between">
      <Dashleft />
      <div className="flex justify-between " >
        <div className="ml-[-80em] flex flex-col justify-center items-center h-[30vh]">
          <h1 className="text-[green] text-[2.5em] my-[3em]">Your Categories</h1>
          <h1>Family</h1>
          <h1>Friends</h1>
          <p className="text-red-600">{errorMessage}</p>

          <div className="flex justify-center mt-[3em]">
              <button
                className="text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl "
                onClick={handlecategory}
              >
                Add Category
              </button>
        
          </div>
        </div>
        {/* <p className="text-red-600">{errorMessage}</p> */}
      </div>
    </div>
  );
}
export default Categorycontacts;
