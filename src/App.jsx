import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Divorce from "./pages/divorce";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ChildMaintenance from "./pages/ChildMaintenance";
import Oversea from "./pages/oversea";
import About from "./pages/About";
import Khula from "./pages/khula";
import Nadra from "./pages/nadra";
import Consultation from "./pages/Consultation";
import Harassment from "./pages/harassment";
import WomenRight from "./pages/womenright";
import Rights from "./pages/rights";
import Cyber from "./pages/cyber";
import Marriage from "./pages/marriage";
import Maintenance from "./pages/wifemaintenance";
import Property from "./pages/property";
import Tax from "./pages/tax";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/divorce" element={<Divorce />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<Post />} />
        <Route path="/service" element={<Service />} />
        <Route path="/child-maintenance" element={<ChildMaintenance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/oversea" element={<Oversea />} />
        <Route path="/about" element={<About />} />
        <Route path="/khula" element={<Khula />} />
        <Route path="/nadra" element={<Nadra />} />
        <Route path="/harassment" element={<Harassment />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/womenright" element={<WomenRight />} />
        <Route path="/rights" element={<Rights />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/marriage" element={<Marriage />} />
        <Route path="/wifemaintenance" element={<Maintenance />} />
        <Route path="/property" element={<Property />} />
        <Route path="/tax" element={<Tax />} />
      </Routes>
    </Router>
  );
}

export default App;
