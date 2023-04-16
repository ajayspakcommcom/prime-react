
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const Toasts = (props) => { 

    const toast = useRef(null);

    const clear = (submit) => {
        toast.current.clear();
        submit && show();
    };

    const content = <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
        <div className="text-center">
            <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
            <div className="font-bold text-xl my-3">Are you sure?</div>
        </div>
        <div className="flex gap-2">
            <Button onClick={(e) => clear(true)} type="button" label="Confirm" className="p-button-success w-6rem" />
            <Button onClick={(e) => clear(false)} type="button" label="Cancel" className="p-button-warning w-6rem" />
        </div>
    </div>;


    const show = () => {
        toast.current.show({ severity: 'info', content: content });
    };


    
    const onShowHandler = (message) => { 
        console.log(message);
    };
    


    return (
        <>
            <div className="card flex justify-content-center">
                <Toast ref={toast} position="bottom-right" onClick={onShowHandler} />
                <Button onClick={show} label="Show" />
            </div>
        </>
    );
};

export default Toasts;