import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Navigate to={"/home"} />} />
            <Route exact path={"/home"} element={<Home />} />
            <Route exact path={"/cart"} element={<Cart />} />
        </Routes>
    );
}

export default App;
