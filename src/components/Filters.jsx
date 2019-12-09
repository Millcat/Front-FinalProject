import React, { useState } from "react";
import "../css/allTours.css";

const Filters = props => {
  const [filteredThematics, setFilteredThematics] = useState([
    { name: "Food", isSelected: false },
    { name: "Street Art", isSelected: false },
    { name: "Fashion", isSelected: false },
    { name: "Cinema", isSelected: false },
    { name: "Insolite", isSelected: false },
    { name: "Monument", isSelected: false },
    { name: "Art", isSelected: false },
    { name: "Sports", isSelected: false }
  ]);

  const [filteredLanguages, setFilteredLanguages] = useState([
    { name: "French", isSelected: false },
    { name: "English", isSelected: false },
    { name: "Japanese", isSelected: false },
    { name: "German", isSelected: false },
    { name: "Spanish", isSelected: false },
    { name: "Chinese", isSelected: false },
    { name: "Russian", isSelected: false }
  ]);

  const handleClickThematics = filterName => {
    const updatedFilteredThematics = filteredThematics.map(filter => {
      if (filter.name !== filterName) return filter;

      return {
        ...filter,
        isSelected: !filter.isSelected // Right after so it overrides the current value
      };
    });

    setFilteredThematics(updatedFilteredThematics); // set the new array updated with all my filters name and isSelected (true or false)

    props.onChange(updatedFilteredThematics, filteredLanguages); // 1) send the array to the parent component (AllTours.jsx)
    // in the same order than I declare the function in AllTours.jsx : (thematics, languages) => thematics THEN languages
  };

  const handleClickLanguages = filterName => {
    const updatedFilteredLanguages = filteredLanguages.map(filter => {
      if (filter.name !== filterName) return filter;

      return {
        ...filter,
        isSelected: !filter.isSelected // Right after so it overrides the current value
      };
    });

    setFilteredLanguages(updatedFilteredLanguages);

    props.onChange(filteredThematics, updatedFilteredLanguages);
    // in the same order than I declare the function in AllTours.jsx : (thematics, languages) => thematics THEN languages
  };

  return (
    <div className="filters">
      <div className="filters-list">
        {filteredThematics.map(filteredName => (
          <div
            key={filteredName.name}
            className={
              "filter " + (filteredName.isSelected ? "isSelected" : "")
            }
            onClick={() => handleClickThematics(filteredName.name)}
          >
            {filteredName.name}
          </div>
        ))}
      </div>
      <div className="filters-list">
        {filteredLanguages.map(filteredName => (
          <div
            key={filteredName.name}
            className={
              "filter " + (filteredName.isSelected ? "isSelected" : "")
            }
            onClick={() => handleClickLanguages(filteredName.name)}
          >
            {filteredName.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
