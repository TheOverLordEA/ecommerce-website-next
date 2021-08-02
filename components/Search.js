const Search = (props) => {
  return (
    <div className="flex items-center">
      <input type="text" value={props.value} />
    </div>
  );
};

export default Search;
