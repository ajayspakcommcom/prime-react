
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import DataTableBasic from './DataTableBasic'; 
import DataTableDynamicColumn from './DataTableDynamicColumn';
import DataTableTemplate from './DataTableTemplate'; 





const DataTables = (props) => { 

    const [isVisible, setIsVisible] = useState('');

    return (
        <Card>
            <div class="grid p-2">                
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Dynamic Column" onClick={() => { setIsVisible('dynamic-column') }} /></div>
                <div class="col"><Button label="Template" onClick={() => { setIsVisible('template') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
                <div class="col"><Button label="Basic" onClick={() => { setIsVisible('basic') }} /></div>
            </div>
            
            {isVisible === 'basic' && <DataTableBasic />}
            {isVisible === 'dynamic-column' && <DataTableDynamicColumn />}
            {isVisible === 'template' && <DataTableTemplate />}

            
        </Card>
    );
};

export default DataTables;