
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './Service/ProductService';
import { Card } from 'primereact/card';


const DataTableSort = (props) => {

    const [products, setProducts] = useState([]);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);



    return (
        <Card>
            <h2>Sort</h2>
            <DataTable value={products} sortField="price" sortOrder={-1} removableSort>
                <Column field="code" header="Code" sortable style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ width: '20%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '20%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '20%' }}></Column>
            </DataTable>
        </Card>
    );
};

export default DataTableSort;