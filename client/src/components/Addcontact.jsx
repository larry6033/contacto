import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddContact() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phonenumber: "",
    address: "",
    birthday: "",
    category: "",
  });
  const navigate = useNavigate();

  function handleAddcontact(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // navigate("/login")
  }
  const getData = (e) => {
   
    setErrorMessage("");
    const {
      first_name,
      last_name,
      email,
      phonenumber,
      address,
      birthday,
      category,
    } = formData;

    if (
      !first_name ||
      !last_name ||
      !email ||
      !phonenumber ||
      !address ||
      !birthday ||
      !category
    ) {
      setErrorMessage("Kindly fill all the fields");
      return;
    }
    else{
      e.preventDefault();
      console.log(formData);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src="src/assets/images/technology (2).png"
        className="w-[100px] rounded-full"
      />
      <ul>
        <div className="flex justify-between m-[3em]">
          <li>First Name:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input
              onChange={handleAddcontact}
              name="first_name"
              type="text"
              className="border-[green] border-b-2"
            />
          </div>
        </div>
        <div className="flex justify-between m-[3em]">
          <li>Last Name:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input
              onChange={handleAddcontact}
              name="last_name"
              type="text"
              className="border-[green] border-b-2"
            />
          </div>
        </div>
        <div className="flex justify-between m-[3em]">
          <li>Email:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input
              onChange={handleAddcontact}
              name="email"
              type="text"
              className="border-[green] border-b-2"
            />
          </div>
        </div>
        <div className="flex justify-between m-[3em]">
          <li>Phone number:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input
              onChange={handleAddcontact}
              name="phonenumber"
              type="text"
              className="border-[green] border-b-2"
            />
          </div>
        </div>
        <div className="flex justify-between m-[3em]">
          <li>Home Address:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input
              onChange={handleAddcontact}
              name="address"
              type="text"
              className="border-[green] border-b-2"
            />
          </div>
        </div>
        <div className="flex justify-between m-[3em]">
          <li>DOB:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input
              onChange={handleAddcontact}
              name="birthday"
              type="text"
              className="border-[green] border-b-2"
            />
          </div>
        </div>

        <div className="flex justify-between m-[3em]">
          <li>Category:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input
              onChange={handleAddcontact}
              name="category"
              type="text"
              className="border-[green] border-b-2"
            />
          </div>
        </div>
      </ul>
      <p className="text-red-600">{errorMessage}</p>

      <button
        onClick={getData}
        className="text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl "
      >
        Add Contact
      </button>
    </div>
  );
}
export default AddContact;
