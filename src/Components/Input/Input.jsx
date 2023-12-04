import "./Input.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const Input = (props) => {
  return (
    <div>
      <div className="merged-input-icon">
        <input
          className="input-style"
          type="text"
          placeholder={props.placeholder}
        />
        <div className="icon">
          <RiArrowDropDownLine size={30} />
        </div>
      </div>
    </div>
  );
};

export default Input;
