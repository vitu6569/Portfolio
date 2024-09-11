import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Stars from "./components/common/stars"
import Home from "./components/pages/home"
import About from "./components/pages/about"
import Contact from "./components/pages/contact"
import Project from "./components/pages/project"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="./components/pages/home" element={<Home />}></Route>
          <Route path="./components/pages/about" element={<About />}></Route>
          <Route path="./components/pages/project" element={<Project />}></Route>
          <Route path="./components/pages/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Stars/>
    </div>
  )
};

export default App;

// Arrumar Starts | motivo: o site fica quebrado após adiconar o CSS
