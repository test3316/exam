import InputButtons from "../buttons/InputButtons";
import FilterButton from "../buttons/FilterButton";
import SearchButton from "../buttons/SearchButton";
SearchButton;

const BasicContainer = () => {
  return (
    <>
      <div className="flex flex-wrap bg-white justify-center h-[250px] w-[1000px] rounded-2xl items-center mt-[250px] mx-auto">
        <div className="flex flex-wrap">
          <InputButtons title="მწარმოებელი" />
          <InputButtons title="მოდელი" />
          <InputButtons title="მდებარეობა" />
          <InputButtons title="განბაჟება" />
        </div>
        <div className="flex relative bottom-16 left-[85px]">
          <InputButtons title="წელი" />
          <InputButtons title="ფასი" />
          <InputButtons title="საწვავი" />
          <FilterButton filter="დამატებითი ფილტრები" />
        </div>
        <div className="flex-wrap justify-center bg-orange-600   text-white relative bottom-[5px] right-24">
          <SearchButton searchText="ძებნა" />
        </div>
      </div>
    </>
  );
};
export default BasicContainer;
