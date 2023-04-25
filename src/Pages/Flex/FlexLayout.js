import { Card } from "primereact/card";
import { Divider } from 'primereact/divider';


const FlexLayout = (props) => {
    return (
        <>
            <Card>
                <h2>Display</h2>
                <div className="bg-blue-500 block">1</div>
                <div className="bg-blue-500 block">2</div>
                <hr />
                <div className="bg-blue-500 hidden">1</div>
                <div className="bg-blue-500 hidden">2</div>
                <hr />
                <div className="bg-blue-500 inline">1</div>
                <div className="bg-blue-500 inline">2</div>
                <hr />
                <div className="bg-blue-500 inline-block">1</div>
                <div className="bg-blue-500 inline-block">2</div>
                <hr />
                <div className="bg-blue-500 flex">1</div>
                <div className="bg-blue-500 flex">2</div>
                <hr />
                <div className="bg-blue-500 inline-flex">1</div>
                <div className="bg-blue-500 inline-flex">2</div>
            </Card>
            <Divider type="dashed" />
        </>
    );
};

export default FlexLayout;