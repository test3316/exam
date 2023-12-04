const SearchButton = (props) => {
  return (
    <>
      <button className="h-[50px] w-[170px] border-2 rounded-md text-sm	">
        {props.searchText}
      </button>
    </>
  );
};

export default SearchButton;
