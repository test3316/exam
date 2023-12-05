import InputButtons from "../buttons/InputButtons";
import FilterButton from "../buttons/FilterButton";
import SearchButton from "../buttons/SearchButton";
SearchButton;

const BasicContainer = () => {
  return (
    <>
      <div className="flex flex-col bg-white justify-center h-[250px] w-[80%] rounded-2xl items-center mt-[10px] mx-auto">
        <div className="flex flex-wrap flex-raw ">
          <InputButtons title="მწარმოებელი" />
          <InputButtons title="მოდელი" />
          <InputButtons title="მდებარეობა" />
          <InputButtons title="განბაჟება" />
        </div>
        <div className="flex flex-wrap flex-raw mt-3">
          <InputButtons title="წელი" />
          <InputButtons title="ფასი" />
          <InputButtons title="საწვავი" />
          <FilterButton filter="დამატებითი ფილტრები" />
        </div>
        <div className="flex flex-wrap flex-raw justify-end bg-red mt-3 w-[740px]">
          <div className="  bg-orange-600   text-white relative rounded-md">
            <SearchButton searchText="ძებნა" />
          </div>
        </div>
      </div>
    </>
  );
};
export default BasicContainer;
