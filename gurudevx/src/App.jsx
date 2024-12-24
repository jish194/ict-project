import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AddProductPage from './components/AddProductPage';
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-product" element={<AddProductPage />} />
            </Routes>
        </Router>
    );
}
export default App;