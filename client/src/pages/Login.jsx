import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleLogin(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  }
  const getData=(e)=> {
    
   
    setErrorMessage("");
    const {
      email,
      password,
    
    } = formData;

    if (
      !email ||
      !password 
     
    ) {
      setErrorMessage("Kindly fill all the fields");
      return;
    }
    else{
      e.preventDefault();
      console.log(formData);

      const url = "http://127.0.0.1:8000/api/login/";
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
        if(!res.ok){
          return res.json().then(tell=>{
            setErrorMessage(tell["email"][0])
          })
        }})
        .then((data) => console.log(data))
        .catch((err)=>{
          console.log(err)
    });
    }

  }
  // console.log(formData);
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] flex-wrap">
        <div className="border-[green] border-2 p-[3em] rounded-2xl">
          <div className="flex flex-col justify-center items-center mt-[3em] text-[3em] text-[green] font-bold">
            <h1>Login to your account</h1>
          </div>
          <ul>
            <div className="flex justify-between m-[3em]">
              <li>Email:</li>
              <div>
                {/* <p className="border-[green] border-b-2"></p> */}
                <input
                  onChange={handleLogin}
                  name="email"
                  type="text"
                  className="border-[green] border-b-2"
                />
              </div>
            </div>
            <div className="flex justify-between m-[3em]">
              <li>Password:</li>
              <div>
                {/* <p className="border-[green] border-b-2"></p> */}
                <input
                  onChange={handleLogin}
                  name="password"
                  type="text"
                  className="border-[green] border-b-2"
                />
              </div>
            </div>
            <div className="flex justify-center">
              {" "}
              <p className="text-red-600">{errorMessage}</p>
            </div>
          </ul>
          <div className="flex justify-center">
            <button
              onClick={getData}
              className="text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl "
            >
              
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
