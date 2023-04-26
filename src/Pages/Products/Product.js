import { Card } from 'primereact/card';
import Wrapper from '../../Component/UI/Wrapper';
import { Menubar } from 'primereact/menubar';
import { Link, useNavigate } from "react-router-dom";

const Product = (props) => { 

    const navigate = useNavigate();

    const items = [
        { label: 'Product 1', command: () => { navigate('/product/1') } },
        { label: 'Product 2', command: () => { navigate('/product/2') } },
        { label: 'Product 3', command: () => { navigate('/product/3') } },
        { label: 'Product 4', command: () => { navigate('/product/4') } },
        { label: 'Product 5', command: () => { navigate('/product/5') } },
    ];

    return (
        <Wrapper>
            <Card title="Product List" className='p-card shadow-4'>
                <div className="card">
                    <Menubar model={items} />
                </div>
            </Card>
        </Wrapper>
    );
};

export default Product;