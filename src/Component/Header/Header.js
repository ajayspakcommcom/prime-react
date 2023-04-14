import { Link, useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';


const Header = (props) => {

    const navigate = useNavigate();

    const items = [
        { label: 'Knobs', command: () => { navigate('/knobs') } },
        { label: 'MultiSelects', command: () => { navigate('/multiSelects') } },
        { label: 'Ratings', command: () => { navigate('/ratings') } },
        { label: 'Passwords', command: () => { navigate('/passwords') } },
        { label: 'Table Trees', command: () => { navigate('/tree-table') } },
        { label: 'Chipss', command: () => { navigate('/chipss') } },



    ];

    const start = <Link to="/"><img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2" /></Link>;
    const end = <InputText placeholder="Search" type="text" className="w-full" />;

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    );
};

export default Header;