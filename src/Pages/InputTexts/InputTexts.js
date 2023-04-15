
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

const InputTexts = (props) => { 

    const [value, setValue] = useState('');

    const inputChangeHandler = (e) => { 
        console.log(e.target.value);
    };

    const inputChangeHandler1 = (e) => { 
        console.log(e.target.value);
    };

    return (
        <>
            <InputText value={value} onChange={inputChangeHandler} />
            <hr />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </span>

            <span className="p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText />
            </span>
            <hr />
            <InputText keyfilter="int" placeholder="Integers" />
            <hr />
            <InputText type="text" className="p-inputtext-sm" placeholder="Small" />
            <InputText type="text" placeholder="Normal" />
            <InputText type="text" className="p-inputtext-lg" placeholder="Large" onInput={inputChangeHandler1} />
              
        </>
    );
};

export default InputTexts;