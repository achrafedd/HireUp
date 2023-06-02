import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import { Home, Login, Register, Company, Browse, Blog } from "./pages";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/company" element={<Company />} />
                        <Route path="browse" element={<Browse />} />
                        <Route path="/blog" element={<Blog />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
