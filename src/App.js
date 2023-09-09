import "./App.css";
import { Route, Routes } from "react-router-dom";
import Content from "./pages/Content";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </div>
  );
}

export default App;
