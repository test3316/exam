import Input from "./Input";
import "./InputButtons.css";
import Filter from "./Filter";
const InputButtons = () => {
  return (
    <div className="container-color">
      <div className="container">
        <Input placeholder="მწარმოებე..." />
        <Input placeholder="მოდელი" />
        <Input placeholder="მდებარეობა" />
        <Input placeholder="განბაჟება" />
      </div>
      <div className="container-1">
        <Input placeholder="წელი" />
        <Input placeholder="ფასი" />
        <Input placeholder="მდებარეობა" />
        <Filter />
      </div>
    </div>
  );
};
export default InputButtons;
