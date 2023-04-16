import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { CustomerService } from './Service/CustomerService';


const DataTableFilter = (props) => {

    const [customers, setCustomers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }    
    });

    
    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(data);
            console.log(data);
            setLoading(false);
        });
    }, []);


    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Global Search" />
                </span>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <>
            <div className="card">
                <DataTable value={customers} paginator rows={5} filters={filters} loading={loading} globalFilterFields={['name', 'country.name', 'activity', 'company', 'date']} header={header} emptyMessage="No customers found.">
                    <Column field="name" header="Name" />
                    <Column field="country.name" header="Country" />
                    <Column field="activity" header="Activity" />
                    <Column field="company" header="Company" />
                    <Column field="date" header="Date" />
                </DataTable>
            </div>
        
        </>
    );
};

export default DataTableFilter;