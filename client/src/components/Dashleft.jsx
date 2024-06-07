import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Dashleft() {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[90vh]">
      {" "}
      <div className="bg-[#dfd3d3] w-[20%] h-[100%]">
        <div className="flex justify-center py-[3em]">
          {/* <img src="src/assets/images/technology (2).png" width={150} /> */}
        </div>
        <div>
          <Link to="/dashboard">
            <h1 className="hover:text-[green] font-semibold flex justify-center text-[3em]">
              Dashboard{" "}
            </h1>
          </Link>
          <Link to="/contact">
            <h1 className="hover:text-[green] font-semibold flex justify-center ">
              Contact
            </h1>
          </Link>
          <Link to="/category">
            <h1 className="hover:text-[green] font-semibold flex justify-center py-[5em]">
              Categories
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Dashleft;
