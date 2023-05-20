import React from 'react';
import { Button } from 'primereact/button';
import { useLocalStorage, useSessionStorage } from 'primereact/hooks';


const UseStorages = (props) => {

    const [localCount, setLocalCount] = useLocalStorage(0, 'localCount');
    const [sessionCount, setSessionCount] = useSessionStorage(0, 'sessionCount');

    return (
        <>
            <div className="card flex flex-column align-items-center">
                <span className="font-bold text-4xl mb-5">{localCount}</span>
                <div className="flex flex-wrap gap-3">
                    <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={() => setLocalCount(localCount + 1)}></Button>
                    <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={() => setLocalCount(0)}></Button>
                </div>
            </div>
            <hr />
            <div className="card flex flex-column align-items-center">
                <span className="font-bold text-4xl mb-5">{sessionCount}</span>
                <div className="flex flex-wrap gap-3">
                    <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={() => setSessionCount(sessionCount + 1)}></Button>
                    <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={() => setSessionCount(0)}></Button>
                </div>
            </div>
        </>
    );
};

export default UseStorages;