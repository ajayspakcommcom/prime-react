import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../../Service/NodeService';



const TreeTables = (props) => {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => { setNodes(data); console.log(data) });
    }, []);

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);
        editedNode.data[options.field] = value;
        setNodes(newNodes);
    };

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }
        return node;
    };

    const inputTextEditor = (options) => {
        return <InputText type="text" value={options.rowData[options.field]} onChange={(e) => onEditorValueChange(options, e.target.value)} />;
    };

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    };

    const typeEditor = (options) => {
        return inputTextEditor(options);
    };

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    };

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander style={{ height: '3.5rem' }}></Column>
                <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5rem' }}></Column>
                <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5rem' }}></Column>
            </TreeTable>
        </div>
    );
};

export default TreeTables;