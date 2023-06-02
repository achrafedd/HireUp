import { Outlet } from "react-router";

import Notification from "../Notification/Notification";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
            <Notification />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
