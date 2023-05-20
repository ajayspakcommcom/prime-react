import React from 'react';
import { Message } from 'primereact/message';

const Messages = (props) => {

    const content = (
        <div className="flex align-items-center">
            <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="32" />
            <div className="ml-2">Always bet on Prime.</div>
        </div>
    );

    return (
        <>
            <div className="card flex justify-content-center">
                <Message text='Hello World' />
                <Message text='Hello World' severity='info' />
                <Message text='Success Message' severity='success' />
                <Message text='Warn' severity='warn' />
                <Message severity="error" text="Error Message" />
            </div>

            <div className="card">
                <Message style={{ border: 'solid #696cff', borderWidth: '0 0 0 6px', color: '#696cff' }} className="border-primary w-full justify-content-start p-messages-warn" severity="info" content={content} />
            </div>
        </>
    );
};

export default Messages;