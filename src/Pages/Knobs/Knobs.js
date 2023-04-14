
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

const Knobs = (props) => {

    const [value1, setValue1] = useState(0);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value1} onChange={(e) => { setValue1(e.value); console.log(e.value) }} />
        </div>
    );
};

export default Knobs;