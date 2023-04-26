
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const ProductItem = (props) => { 

    const params = useParams();
    const [id, setId] = useState(params.id);

    return (
        <>
            <h1>Product Item {id}</h1>
        </>
    );
};

export default ProductItem;