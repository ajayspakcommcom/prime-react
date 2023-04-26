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
        { label: 'Keyfilters', command: () => { navigate('/keyfilters') } },
        { label: 'Terminals', command: () => { navigate('/terminals') } },
        { label: 'Textareas', command: () => { navigate('/textareas') } },
        { label: 'InputTexts', command: () => { navigate('/inputTexts') } },
        { label: 'ToggleButtons', command: () => { navigate('/toggleButtons') } },
        { label: 'Sliders', command: () => { navigate('/sliders') } },
        { label: 'DataTables', command: () => { navigate('/dataTables') } },
        { label: 'Flex', command: () => { navigate('/flex') } },
        { label: 'Toasts', command: () => { navigate('/toasts') } },
        { label: 'Calendars', command: () => { navigate('/calendars') } },
        { label: 'Cards', command: () => { navigate('/cards') } },
        { label: 'Product', command: () => { navigate('/product') } },
        { label: 'Product Filter', command: () => { navigate('/productfilter') } },

        
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