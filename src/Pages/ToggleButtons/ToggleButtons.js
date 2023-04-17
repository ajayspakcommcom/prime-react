
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

const ToggleButtons = (props) => {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);


    return (
        <>
            <ToggleButton checked={checked} onChange={(e) => { setChecked(e.value); console.log(e.target.value); }} />
            <div className="card">
                <ToggleButton
                    onLabel="I confirm"
                    offLabel="I reject"
                    onIcon="pi pi-check"
                    offIcon="pi pi-times"
                    checked={checked1}
                    onChange={(e) => { setChecked1(e.value); console.log(e.target.value); }}
                    onFocus={(e) => { console.log(e) }}
                    onBlur={(e) => { console.log(e) }}
                />
            </div>
        </>
    );
};

export default ToggleButtons;