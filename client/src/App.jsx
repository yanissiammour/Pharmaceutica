import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <BrowserRouter className="m-0 p-0 border-box">
            <Navbar />
            <div className="mt-10 bg-black h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
