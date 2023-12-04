import { CiFilter } from "react-icons/ci";

const FilterButton = (props) => {
  return (
    <button className="h-[50px] w-[170px] border-2 rounded-md flex justify-between items-center p-2 mx-2.5 text-sm	">
      <CiFilter size={30} />

      {props.filter}
    </button>
  );
};

export default FilterButton;
