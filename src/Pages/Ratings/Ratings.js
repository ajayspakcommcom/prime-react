
import React, { useState } from "react";
import { Rating } from "primereact/rating";

const Ratings = (props) => {

    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value1} onChange={(e) => { setValue1(e.value); console.log('1', e.value); }} stars={10} />
            <Rating value={value2} onChange={(e) => { setValue2(e.value); console.log('2', e.value); }} stars={15} />
        </div>
    );
};

export default Ratings;