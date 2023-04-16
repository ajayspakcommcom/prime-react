
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import CalendarBasic from './CalendarBasic';



const Calendars = (props) => { 

    const [isVisible, setIsVisible] = useState('');

    return (
        <>
            <Card>
                <div className="grid p-2">
                    <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>                    
                </div>

                {isVisible === 'basic' && <CalendarBasic />}


            </Card>
        </>
    );
};

export default Calendars;









