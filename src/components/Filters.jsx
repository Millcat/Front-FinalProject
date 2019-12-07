import React, { useState } from "react";
import '../css/allTours.css'

const Filters = (props) => {
    const [filters, setFilter] = useState([
        { name: 'Food', isSelected: false },
        { name: 'Street Art', isSelected: false },
        { name: 'Fashion', isSelected: false },
        { name: 'Cinema', isSelected: false },
        { name: 'Insolite', isSelected: false },
        { name: 'Monument', isSelected: false },
        { name: 'Art', isSelected: false },
        { name: 'Sports', isSelected: false }
    ]);

    // console.log(filters);

    const handleClick = filterName => {
        console.log("yeey this thematic is clicked!");

        const updatedFilters = filters.map(filter => {
            if (filter.name !== filterName) return filter;

            return {
                ...filter,
                isSelected: !filter.isSelected // Right after so it overrides the current value
            };
        });

        setFilter(updatedFilters); // set the new array updated with all my filters name and isSelected (true or false)

        props.onChange(updatedFilters); // 1) send the array to the parent component (AllTours.jsx)
    }

    return (
        <div className="filters">
            <div className="filters-thematics">
                {filters.map(filter => (
                    <div
                        key={filter.name}
                        className={'thematic ' + (filter.isSelected ? 'isSelected' : '')}
                        onClick={() => handleClick(filter.name)}
                    >
                        {filter.name}
                    </div>
                ))}
            </div>
            <div className="filters-languages">
                <p>filters by languages here</p>
            </div>
        </div>
    )
}

export default Filters
