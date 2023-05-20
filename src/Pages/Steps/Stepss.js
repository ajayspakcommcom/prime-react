import React, { useState, useRef } from "react";
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';

const Stepss = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { label: 'Personal' },
        { label: 'Seat' },
        { label: 'Payment' },
        { label: 'Confirmation' }
    ];

    return (
        <>
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => { setActiveIndex(e.index) }} readOnly={false} />
        </>
    );
};

export default Stepss;