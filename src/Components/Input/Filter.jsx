import { IoFilter } from "react-icons/io5";
import "./Filter.css";
const Filter = () => {
  return (
    <>
      <div className="filter">
        <div className="icon-location">
          <IoFilter size={18} />
        </div>
        <div className="filter-text">
          <p>
            დამატებითი <br />
            ფილტრები
          </p>
        </div>
      </div>
    </>
  );
};

export default Filter;
