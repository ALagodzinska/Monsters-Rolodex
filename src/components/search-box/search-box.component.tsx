// it is not in isolation, is present on entire page
import "./search-box.styles.css";
import { ChangeEvent, ChangeEventHandler } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  func?: ChangeEventHandler; // same as below
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; // want to define our own function
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
