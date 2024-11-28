import React, { useState } from 'react';

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

    //available filters
  const availableFilters = ['Cruelty-Free', 'Vegan', 'Sustainable', 'Ethical Working Conditions']; 

    //add filter function
  const addFilter = (filter) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // remove filter function
  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((item) => item !== filter));
  };

  return (
    <div className="filter-container">      
      <div className="filter-buttons">
        {availableFilters.map((filter) => (
          <button
            key={filter}
            className="filter-button"
            onClick={() => addFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="selected-filters">
        {selectedFilters.map((filter) => (
          <div key={filter} className="selected-filter">
            <span>{filter}</span>
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
