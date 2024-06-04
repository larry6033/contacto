function AddContact() {
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
          <li>Email:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input type="text" className="border-[green] border-b-2" />
          </div>
        </div>
        <div className="flex justify-between m-[3em]">
          <li>Phone no:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input type="text" className="border-[green] border-b-2" />
          </div>
        </div>
        <div className="flex justify-between m-[3em]">
          <li>Home Address:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input type="text" className="border-[green] border-b-2" />
          </div>
        </div>
        <div className="flex justify-between m-[3em]">
          <li>DOB:</li>
          <div>
            {/* <p className="border-[green] border-b-2"></p> */}
            <input type="text" className="border-[green] border-b-2" />
          </div>
        </div>
      </ul>
    </div>
  );
}
export default AddContact;
