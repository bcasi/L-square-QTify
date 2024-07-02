import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";
import styles from "./Search.module.css";

const Search = ({ placeholder }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input required className={styles.search} placeholder={placeholder} />
      <button type="submit" className={styles.search_button}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
