import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import StartingPage from "./components/StartingPage";
import FetchingData from "./components/FetchingData";
import DropdownMenuHolder from "./components/DropdownMenu";
import { searchActions } from "./store/searchInputValue";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");

  const appClassName = useSelector((state) => state.weather.appClassName);
  const searchInput = useSelector((state) => state.searchInput.search);

  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    const closeDropdown = (event) => {
      if (event.target.closest(".dropdown") === null) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  useEffect(() => {
    if (searchInput) {
      inputRef.current.focus();
    }
  }, [searchInput]);

  const locationHandler = (event) => {
    if (event.key === "Enter") {
      setLocation(event.target.value);
      setIsActive(true);
      setIsDropdownOpen(false);
    }
  };

  const searchHandler = (event) => {
    setSearchLocation(event.target.value);
    dispatch(searchActions.updateSearch(event.target.value));
    setIsDropdownOpen(true);
  };

  return (
    <>
      <div className={appClassName}>
        <input
          ref={inputRef}
          type="text"
          id="location"
          placeholder="Search"
          className="search-bar"
          onKeyDown={locationHandler}
          onChange={searchHandler}
          value={searchInput}
        />
        {isDropdownOpen && searchLocation && (
          <DropdownMenuHolder search={searchLocation} />
        )}
        {isActive ? <FetchingData location={location} /> : <StartingPage />}
      </div>
    </>
  );
}

export default App;
