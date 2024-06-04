function Login() {
  return(
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
        </ul>
        <div className="flex justify-center">
          <button className="text-[white] text-[1em] py-[1em] px-[3em] bg-[green] rounded-2xl ">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Login;
