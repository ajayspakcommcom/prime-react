
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './Service/ProductService';
import { Card } from 'primereact/card';


const DataTableDynamicColumn = (props) => {

    const [products, setProducts] = useState([]);

    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];


    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);



    return (
        <Card>
            <h2>Dynamic Column</h2>
            <DataTable value={products}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </Card>
    );
};

export default DataTableDynamicColumn;