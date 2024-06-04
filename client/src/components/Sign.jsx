function Sign() {
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh]  flex-wrap">
        <div className="border-[green] border-2 p-[3em] rounded-2xl">
          <div className="flex flex-col justify-center items-center mt-[3em] text-[2em] text-[green] font-bold">
            <h1>Signup now</h1>
          </div>
          <ul>
            <div className="flex justify-between m-[3em]">
              <li>First Name:</li>
              <div>
                {/* <p className="border-[green] border-b-2"></p> */}
                <input type="text" className="border-[green] border-b-2" />
              </div>
            </div>
            <div className="flex justify-between m-[3em]">
              <li>Last Name:</li>
              <div>
                {/* <p className="border-[green] border-b-2"></p> */}
                <input type="text" className="border-[green] border-b-2" />
              </div>
            </div>
            <div className="flex justify-between m-[3em]">
              <li>email:</li>
              <div>
                {/* <p className="border-[green] border-b-2"></p> */}
                <input type="text" className="border-[green] border-b-2" />
              </div>
            </div>
            <div className="flex justify-between m-[3em]">
              <li>Phone number:</li>
              <div>
                {/* <p className="border-[green] border-b-2"></p> */}
                <input type="text" className="border-[green] border-b-2" />
              </div>
            </div>
            <div className="flex justify-between m-[3em]">
              <li>Password:</li>
              <div>
                {/* <p className="border-[green] border-b-2"></p> */}
                <input type="text" className="border-[green] border-b-2" />
              </div>
            </div>
            <div className="flex justify-between m-[3em]">
              <li>Confirm Password:</li>
              <div>
                {/* <p className="border-[green] border-b-2"></p> */}
                <input type="text" className="border-[green] border-b-2" />
              </div>
            </div>
          </ul>
          <div className="flex justify-center">
            <button
              className="text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl "
              onClick={handlePopUp}
            >
              Signup
            </button>
          </div>
          <p className="font-semibold pt-[2em] text-center">
            already have an account?
            <span className="text-[green] cursor-pointer ">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Sign;
