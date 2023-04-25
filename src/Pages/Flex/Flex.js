import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React, { useState } from 'react';
import FlexLayout from "./FlexLayout";
import Spacing from "./Spacing";
import Typography from "./Typography";

const Flex = (props) => {

    const [isVisible, setIsVisible] = useState('layout');

    return (
        <>
            <Card>
                <div className="grid p-2">
                    <div className="col"><Button label="Display" onClick={() => { setIsVisible('layout') }} /></div>
                    <div className="col"><Button label="Typography" onClick={() => { setIsVisible('typography') }} /></div>
                    <div className="col"><Button label="Spacing" onClick={() => { setIsVisible('spacing') }} /></div>
                </div>
                {isVisible === 'layout' && <FlexLayout />}
                {isVisible === 'typography' && <Typography />}
                {isVisible === 'spacing' && <Spacing />}
            </Card>
        </>
    );
};

export default Flex;