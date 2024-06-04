
import { BrowserRouter, Routes, Route } from "react-router-dom";// import-react-router-dom
//this is use to create navigation routes for pages

import Header from "./Components/Header";
import LiteritureSurvey from "./Components/LiteritureSurvey";
import Home from "./Components/Home";
import Docs from "./Components/Documents";



function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/header" element={<Header />} />
      <Route path="/ls" element={<LiteritureSurvey />} />
      <Route path="/docs" element={<Docs />} />
        


      </Routes>
    </BrowserRouter>
  )
}

export default App;
