import { Card } from 'primereact/card';
import Wrapper from '../../Component/UI/Wrapper';

const Cards = (props) => {
    return (
        <Wrapper>
            <Card title="Title" className='p-card shadow-4'>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </Wrapper>
    );
};

export default Cards;