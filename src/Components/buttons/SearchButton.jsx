const SearchButton = (props) => {
  return (
    <>
      <button className="h-[50px] w-[170px]  border-2 border-transparent				rounded-md	 text-sm bg-orange-600   text-white ">
        {props.searchText}
      </button>
    </>
  );
};

export default SearchButton;
