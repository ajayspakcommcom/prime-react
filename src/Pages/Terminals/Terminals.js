import React, { useRef} from 'react';
import { Tag } from 'primereact/tag';

const Terminals = (props) => { 

    const getElement = (event) => { 
        console.log(event.target.innerText);    
    };

    return (
        <>
            <Tag value="Primary" icon="pi pi-user" className='p-tag-rounded' onClick={getElement}></Tag>
            <Tag severity="success" value="Success" rounded icon="pi pi-angle-right"></Tag>
            <Tag severity="info" value="Info" rounded icon="pi pi-apple"></Tag>
            <Tag severity="warning" value="Warning" rounded></Tag>
            <Tag severity="danger" value="Danger" rounded></Tag>            
        </>
    );
};

export default Terminals