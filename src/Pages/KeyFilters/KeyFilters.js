
import React from 'react';
import { InputText } from 'primereact/inputtext';

const KeyFilters = (props) => {

    const onChangeHanlder = (e) => { 
        console.log(e.target.value);
    };

    return (
        <>
            <InputText placeholder='int' keyfilter="int" />
            <InputText placeholder='int' keyfilter="num" />
            <InputText keyfilter="money" />
            <InputText keyfilter="alpha" />
            <InputText keyfilter="alphanum" />
            <InputText placeholder='Custom' keyfilter={/[^s]/} onChange={onChangeHanlder} />
        </>
    );
};

export default KeyFilters;