import { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./DropdownMenu.module.css";
let cityNames = [
  { id: 1, name: "Ahmedabad" },
  { id: 2, name: "Bengaluru" },
  { id: 3, name: "Chennai" },
  { id: 4, name: "Delhi" },
  { id: 5, name: "Ernakulam" },
  { id: 6, name: "Faridabad" },
  { id: 7, name: "Ghaziabad" },
  { id: 8, name: "Hyderabad" },
  { id: 9, name: "Indore" },
  { id: 10, name: "Jaipur" },
  // States
  { id: 11, name: "Karnataka" },
  { id: 12, name: "Lakshadweep" },
  { id: 13, name: "Maharashtra" },
  { id: 14, name: "Nagaland" },
  { id: 15, name: "Odisha" },
  { id: 16, name: "Punjab" },
  { id: 17, name: "Rajasthan" },
  { id: 18, name: "Dehradun" },
  { id: 19, name: "Dhanbad" },
  { id: 20, name: "Durgapur" },
  { id: 21, name: "Darjeeling" },
  { id: 22, name: "Dhule" },
  { id: 23, name: "Davanagere" },
  { id: 24, name: "Zambia" },
  { id: 25, name: "Durg" },
];

import { useDispatch } from "react-redux";
import { searchActions } from "../store/searchInputValue";
const DropdownMenu = ({ items, onSelect }) => {
  if (items.length === 0) {
    return <div className={classes.modal}>No such cities in database</div>;
  }
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <ul>
          {items.map((city) => (
            <li key={city.id} onClick={() => onSelect(city.name)}>
              {city.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DropdownMenuHolder = ({ search }) => {
  const dispatch = useDispatch();
  const [selectedName, setSelectedName] = useState("");
  const filteredCities = cityNames.filter((city) =>
    city.name.toLowerCase().startsWith(search.toLowerCase())
  );

  const handleSelect = (name) => {
    setSelectedName(name);
    dispatch(searchActions.searchHandler(name));
  };

  return (
    <>
      {ReactDOM.createPortal(
        <DropdownMenu items={filteredCities} onSelect={handleSelect} />,
        document.getElementById("dropdown-root")
      )}
    </>
  );
};

export default DropdownMenuHolder;
