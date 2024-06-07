import Addcategory from "../components/Addcategory";
import Dashleft from "../components/Dashleft";
function AddCategory() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-[100%]  h-[80%] ">
        <Dashleft />
      </div>
      <div className="ml-[-80em] flex flex-col justify-center items-center h-[40vh]">
        <div className="ml-[-150em] flex flex-col justify-center items-center h-[40vh]">
          ;{" "}
          <Addcategory className="ml-[-80em] flex flex-col justify-center items-center h-[40vh]" />
        </div>
      </div>
    </div>
  );
}
export default AddCategory;
