
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import DataTableBasic from './DataTableBasic'; 
import DataTableDynamicColumn from './DataTableDynamicColumn';
import DataTableTemplate from './DataTableTemplate'; 
import DataTablePaginator from './DataTablePaginator';
import DataTableSort from './DataTableSort';
import DataTableFilter from './DataTableFilter';
import DataTableEditRow from './DataTableEditRow';




const DataTables = (props) => { 

    const [isVisible, setIsVisible] = useState('');

    return (
        <Card>
            <div className="grid p-2">                
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Dynamic Column" onClick={() => { setIsVisible('dynamic-column') }} /></div>
                <div className="col"><Button label="Template" onClick={() => { setIsVisible('template') }} /></div>
                <div className="col"><Button label="Paginator" onClick={() => { setIsVisible('paginator') }} /></div>
                <div className="col"><Button label="Sort" onClick={() => { setIsVisible('sort') }} /></div>
                <div className="col"><Button label="Filter" onClick={() => { setIsVisible('filter') }} /></div>
                <div className="col"><Button label="Edit Row" onClick={() => { setIsVisible('edit-row') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div className="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
            </div>
            
            {isVisible === 'basic' && <DataTableBasic />}
            {isVisible === 'dynamic-column' && <DataTableDynamicColumn />}
            {isVisible === 'template' && <DataTableTemplate />}
            {isVisible === 'paginator' && <DataTablePaginator />}
            {isVisible === 'sort' && <DataTableSort />}
            {isVisible === 'filter' && <DataTableFilter />}
            {isVisible === 'edit-row' && <DataTableEditRow />}

        </Card>
    );
};

export default DataTables;