import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const InputButtons = (props) => {
  const [toggle, setToggle] = useState(false);

  const changeIcon = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button
        className="h-[50px] w-[170px] border-2 rounded-md flex justify-between items-center p-2 mx-2.5 text-sm	"
        onClick={changeIcon}
      >
        {props.title}
        {toggle === false ? (
          <RiArrowDropDownLine size={30} />
        ) : (
          <RiArrowDropUpLine size={30} />
        )}
      </button>
    </div>
  );
};

export default InputButtons;
