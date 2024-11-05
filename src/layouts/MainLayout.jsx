import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="h-16">
                <Navbar />
            </div>
            {/* Dynamic Sections */}
            <div className="min-h-[calc(100vh-290px)] py-12 container mx-auto px-12">
                {/* Dynamic Content */}
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
