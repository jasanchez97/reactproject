import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Information from "./pages/Information/Information"
import Gallery from "./pages/Gallery/Gallery"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/information" element={<Information/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App