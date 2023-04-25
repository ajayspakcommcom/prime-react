import { Card } from "primereact/card";
import { Divider } from 'primereact/divider';


const Spacing = (props) => {
    return (
        <>
            <Card>
                <h1>Spacing</h1>
                <Card>
                    <h2>Padding</h2>
                    <p className="text-primary">Font Color</p>
                    <p className="text-white">Font Color</p>
                    <p className="text-color">Font Color</p>
                    <p className="text-color-secondary">Font Color</p>
                    <p className="text-0">Font Color</p>
                    <p className="text-primary-900">Font Color</p>
                </Card>
            </Card>
        </>
    );
};

export default Spacing;