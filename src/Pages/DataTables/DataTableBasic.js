
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './Service/ProductService';
import { Card } from 'primereact/card';


const DataTableBasic = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);



    return (
        <Card>
            <h2>Basic</h2>
            <DataTable value={products}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </Card>
    );
};

export default DataTableBasic;