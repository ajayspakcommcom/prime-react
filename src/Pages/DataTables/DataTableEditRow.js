
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { ProductService } from './Service/ProductService';


const DataTableEditRow = (props) => {

    const [products, setProducts] = useState(null);
    
    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); 


    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;
        _products[index] = newData;
        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => {options.editorCallback(e.target.value)}} />;
    };

    return (
        <div className="card p-fluid">
            <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete}>
                <Column field="code" header="Code" editor={(options) => textEditor(options)}></Column>
                <Column field="name" header="Name" editor={(options) => textEditor(options)}></Column>
                <Column rowEditor></Column>
            </DataTable>
        </div>
    );
};

export default DataTableEditRow;