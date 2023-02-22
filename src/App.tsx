import { Card } from "./components/Card"
import { Navbar } from "./components/navigation/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const App=()=> {
  return <>
  <Navbar />
  <div className="pt-16 mx-5">
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/projects" element={<Projects />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  </>
}

