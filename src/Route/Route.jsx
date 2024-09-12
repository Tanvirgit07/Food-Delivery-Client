import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Route = () => {
    return (
        <div className="container mx-auto">
            <div>
                <Navbar/>
            </div>
            <div className="ml-2">
                <Outlet/>
            </div>
        </div>
    );
};

export default Route;