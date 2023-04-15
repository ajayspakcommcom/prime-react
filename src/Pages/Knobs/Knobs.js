
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

const Knobs = (props) => {

    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);

    const knobHanlder = (e) => { 
        console.log(e);
        setValue(e.value);
    };

    return (
        <div>
            <Knob
                className='p-knob-value'
                value={value}
                onChange={knobHanlder}
                step={5}
                valueTemplate={`${value}%`}
                strokeWidth={5} size={200}
                textColor="red"
                valueColor='pink'
                rangeColor='blue'
            />
            <p>{value ? value : 'No Value'}</p>
            <hr />
            <Knob value={value1} />
            <Button icon="pi pi-plus" onClick={() => setValue1(value1 + 1)} disabled={value1 === 100} />
            <Button icon="pi pi-minus" onClick={() => setValue1(value1 - 1)} disabled={value1 === 0} />
        </div>
    );
};

export default Knobs;