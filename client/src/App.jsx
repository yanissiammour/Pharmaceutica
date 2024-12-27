import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Transactions from "./Pages/Transactions";

function App() {
    return (
        <BrowserRouter className="m-0 p-0 border-box h-screen hide-scrollbar">
            <Navbar />
            <div className="mt-6 bg-customBackground h-full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/transactions" element={<Transactions />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
export default App;
