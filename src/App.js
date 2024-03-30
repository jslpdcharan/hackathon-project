import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/HeaderComponent'; // Import your Header component
import AboutUs from "./components/AboutUsComponent";
import Home from "./components/HomeComponent";
import Footer from "./components/FooterComponent";
import Admin from "./pages/AdminLogin";
// Import other components as necessary

export default function App() {
    return (
        <BrowserRouter>
            <Header /> {/* Place Header outside of Routes to display it consistently */}
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                {/*<Route path="/committee" element={<YourCommitteeComponent />} />*/}
                {/*<Route path="/events" element={<YourEventsComponent />} />*/}
                {/*<Route path="/clubs" element={<YourClubsComponent />} />*/}
                {/*<Route path="/alumni" element={<YourAlumniComponent />} />*/}
                <Route path="/admin" element={<Admin />} />
                {/* Define routes for other components */}
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}