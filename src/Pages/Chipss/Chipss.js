import React, { useState } from "react";
import { Chips } from "primereact/chips";

const Chipss = (props) => {

    const [value, setValue] = useState([]);

    const onAddHandler = (event) => {
        console.log(event);
        console.log(event.value);
    };

    const onBlurHandler = (event) => {
        console.log(event);
    };

    const onFocusHandler = (event) => {
        console.log(event);
    };

    const onRemoveHanlder = (event) => {
        console.log(event.value);
    };




    return (
        <>
            <div className="card p-fluid">
                <Chips value={value} onChange={(e) => { setValue(e.value); console.log(e.value); }} onRemove={onRemoveHanlder} />
            </div>
        </>
    );
};

export default Chipss;