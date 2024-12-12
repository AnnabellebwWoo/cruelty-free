// importing useState which is a react hook that lets you manage state (changes with time)
import React, { useState } from 'react';

// defines functional component "Filter"
const Filter = () => {
  // selectedFilters is a variable with current state, setSelectedFilters is a function that updates state, all initializing to empty array
  const [selectedFilters, setSelectedFilters] = useState([]);

    //array of available filters
  const availableFilters = ['Cruelty-Free', 'Vegan', 'Sustainable', 'Ethical Working Conditions']; 

    //add filter function
    // Checks if filter is already in array, if not, updates array usiing setSelectedFilters fn
  const addFilter = (filter) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
      // "...selectedFilters" copies the current array
    }
  };

  // remove filter function
  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    // ".filter()" creates new array w/o "item"
    // updates state using setSelectedFilters fn 
  };

  // rendering UI
  return (
    <div className="filter-container">    
      <div className="filter-buttons">
      {/* loops through availableFilters array and creates button for each filter */}
        {availableFilters.map((filter) => (
          <button
          // assigns indentifier for each button
            key={filter}
            className="filter-button"
            // calls addFilter fn when when button is clicked
            onClick={() => addFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

        {/* displays currently selected filters beneath filter buttons */}
      <div className="selected-filters">
      {/* loops through selectedFilters array and creates a <div></div> for each */}
        {selectedFilters.map((filter) => (
          <div key={filter} className="selected-filter">
          {/* displays filter name */}
            <span>{filter}</span>
            {/* calls removeFilter fn when clicked */}
            <button className="remove-filter" onClick={() => removeFilter(filter)}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
