
import './index.css';
import Footer from './Component/Footer/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUs/index';
import ContactUs from './Pages/ContactUs/index';
import Event from './Pages/Event/index';
import Signup  from './Pages/Signup';
import Signin from './Pages/Signin';
function App() {
  return (
    
       <BrowserRouter>
          <Routes>
       <Route path="About" element={<AboutUs />} />
          <Route path="Event" element={<Event />} />
          <Route path="Contact" element={<ContactUs />} />
          <Route path="Register" element={<Signup />} />
          <Route path="login" element={<Signin />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
