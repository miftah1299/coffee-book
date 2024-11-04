import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Dynamic Sections */}
            <div className="min-h-[calc(100vh-290px)] py-12">

            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
