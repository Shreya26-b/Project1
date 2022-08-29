import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Habit from "./Habit";
function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/habit" element={<Habit />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;