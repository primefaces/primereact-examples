import { Routes, Route, NavLink } from "react-router-dom";
import Home from './Home';
import FormikForm from './FormikForm';
import HookForm from './HookForm';
import FinalForm from './FinalForm';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

function App() {
    return (
        <div>
            <nav className="flex">
                <NavLink to="/" className="px-5 py-3 no-underline text-900 text-xl border-bottom-2 border-300 hover:border-500">Home</NavLink>
                <NavLink to="/formikform" className="px-5 py-3 no-underline text-700 text-xl border-bottom-2 border-300 hover:border-500">FormikForm</NavLink>
                <NavLink to="/hookform" className="px-5 py-3 no-underline text-700 text-xl border-bottom-2 border-300 hover:border-500">HookForm</NavLink>
                <NavLink to="/finalform" className="px-5 py-3 no-underline text-700 text-xl border-bottom-2 border-300 hover:border-500">FinalForm</NavLink>
            </nav>
            <div className="p-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="formikform" element={<FormikForm />} />
                    <Route path="hookform" element={<HookForm />} />
                    <Route path="finalform" element={<FinalForm />} />
                </Routes>
            </div>

        </div>
    );
}

export default App;
