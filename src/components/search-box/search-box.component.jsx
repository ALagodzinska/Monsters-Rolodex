// it is not in isolation, is present on entire page
import "./search-box.styles.css";

const SearchBox = (props) => (
  <input
    className={`search-box ${props.className}`}
    type="search"
    placeholder={props.placeholder}
    onChange={props.onChangeHandler}
  />
);

export default SearchBox;
