
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';



const ProductItem = (props) => { 

    const params = useParams();
    const [id, setId] = useState(params.id);
    const [searchParams, setSearchParams] = useSearchParams();

    console.log();

    return (
        <>
            <h1>Product Item {id}</h1>
            {searchParams.get('tutorial') && <p>{searchParams.get('tutorial')}</p>}
        </>
    );
};

export default ProductItem;