import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/home"
import "./index.css"
import Stars from "./components/common/stars"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <Stars/>
    </div>
  )
};

export default App;

// Arrumar Starts | motivo: o site fica quebrado após adiconar o CSS
