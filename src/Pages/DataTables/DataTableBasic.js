
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
            <DataTable value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="code" header="Code" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="category" header="Category" sortable></Column>
                <Column field="quantity" header="Quantity" sortable></Column>
            </DataTable>
        </Card>
    );
};

export default DataTableBasic;