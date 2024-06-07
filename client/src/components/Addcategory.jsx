import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Addcategory() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    category: "",
  });
  const navigate = useNavigate();

  function handleAddCategory(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // navigate("/login")
  }
  const getData = (e) => {
    setErrorMessage("");
    const { category } = formData;

    if (!category) {
      setErrorMessage("Kindly fill the category field");
      return;
    } else {
      e.preventDefault();
      console.log(formData);
      const url = "http://127.0.0.1:8000/api/category/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      fetch(url, options)
        .then((res) => {
          // console.log(res)
          if (!res.ok) {
            return res.json().then((tell) => {
              setErrorMessage(tell["category"][0]);
            });
            // return res.json();
          }
        })
        .then((data) => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <h1 className="text-[green] text-[2.5em] my-[2em]">Add a Category</h1>
      <input
        name="last_name"
        onChange={handleAddCategory}
        type="text"
        className="border-[green] border-b-2"
      />
      <p className="text-red-600">{errorMessage}</p>

      <div className="flex justify-center">
        <button
          className="text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl mt-[3em]"
          onClick={getData}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default Addcategory;
