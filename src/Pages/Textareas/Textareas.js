import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

const Textareas = (props) => { 

    const [value, setValue] = useState('');

    const onChangeHanlder = (e) => { 
        console.log(e.target.value);
        setValue(e.target.value);
    };


    return (
        <>
            <span className="p-float-label">
                <InputTextarea
                    value={value}
                    keyfilter="int"
                    onChange={onChangeHanlder}
                    rows={5}
                    cols={30}
                    autoResize
                    className="p-inputtextarea"
                />
                <label htmlFor="username">Username</label>
            </span>           
        </>
    )
};

export default Textareas;