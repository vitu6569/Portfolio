import { BrowserRouter, Routes, Route } from "react-router-dom"
import Stars from "./components/common/stars"
import Home from "./components/pages/home"
import About from "./components/pages/about"
import Contact from "./components/pages/contacts"
import Project from "./components/pages/projects"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="./components/pages/home" index element={<Home />}></Route>
          <Route path="./components/pages/about" index element={<About />}></Route>
          <Route path="./components/pages/project" index element={<Project />}></Route>
          <Route path="./components/pages/contact" index element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Stars/>
    </div>
  )
};

export default App;

// Arrumar Starts | motivo: o site fica quebrado após adiconar o CSS
