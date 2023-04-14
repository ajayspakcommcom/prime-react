import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

const MultiSelects = (props) => {

    const [selectedCities, setSelectedCities] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e) => { setSelectedCities(e.value); console.log(e.value) }} options={cities} optionLabel="name" display="chip" placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
};

export default MultiSelects;