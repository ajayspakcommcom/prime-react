
import React, { useState } from "react";
import { Rating } from "primereact/rating";

const Ratings = (props) => {

    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);

    return (
        // <div classNameName="card flex justify-content-center">
        //     <Rating value={value1} onChange={(e) => { setValue1(e.value); console.log('1', e.value); }} checked={false} />
        //     <Rating value={value2} onChange={(e) => { setValue2(e.value); console.log('2', e.value); }} stars={15} />
        // </div>

        <div className="card">
            <h5>Vertical</h5>
            <div className="field">
                <label htmlFor="firstname1">Firstname</label>
                <input id="firstname1" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
            </div>
            <div className="field">
                <label htmlFor="lastname1">Lastname</label>
                <input id="lastname1" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
            </div>
        </div>

    );
};

export default Ratings;