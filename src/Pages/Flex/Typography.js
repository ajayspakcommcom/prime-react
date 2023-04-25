import { Card } from "primereact/card";
import { Divider } from 'primereact/divider';


const Typography = (props) => {
    return (
        <>
            <Card>
                <h1>Typography</h1>
                <Card>
                    <h2>Font Color</h2>
                    <p className="text-primary">Font Color</p>
                    <p className="text-white">Font Color</p>
                    <p className="text-color">Font Color</p>
                    <p className="text-color-secondary">Font Color</p>
                    <p className="text-0">Font Color</p>
                    <p className="text-primary-900">Font Color</p>
                </Card>
                <Card>
                    <h2>Font Align</h2>
                    <p className="text-left">Font Left</p>
                    <p className="text-center">Font Center</p>
                    <p className="text-right">Font Right</p>
                    <p className="text-justify">Font Justify</p>
                </Card>
                <Card>
                    <h2>Font Weight</h2>
                    <p className="font-light">Font Light</p>
                    <p className="font-normal">Font Normal</p>
                    <p className="font-medium">Font Medium</p>
                    <p className="font-semibold">Font Semibold</p>
                    <p className="font-bold">Font Bold</p>
                </Card>
                <Card>
                    <h2>Text Decoration</h2>
                    <p className="underline">Underline</p>
                    <p className="line-through">Line Through</p>
                    <p className="no-underline">No Underline</p>
                </Card>
            </Card>
            <Divider type="dashed" />
        </>
    );
};

export default Typography;