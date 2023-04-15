
import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

const Sliders = (props) => {

    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState('');

    return (
        <>

            <div className="card mt-5">
                <Slider
                    value={value}
                    onChange={(e) => { setValue(e.value); console.log(e.value); }}
                    onSlideEnd={(e) => { console.log(e); }}
                    className='ml-5 p-slider-handle'
                    step={20}
                    orientation="vertical" 
                />
            </div>
            <hr />
            <div className="w-14rem">
                <InputText value={value1} onChange={(e) => setValue1(e.target.value)} className="w-full" />
                <Slider value={value1} onChange={(e) => setValue1(e.value)} className="w-full" />
            </div>
        </>
    )
};

export default Sliders;