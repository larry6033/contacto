import Contact from "./Contact";

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
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}
export default Contacts;
