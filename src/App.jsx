// Dependencies
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Show from "./Pages/Show/Show";

// Components
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path="/logs" index element={<Home/>}/>
        <Route path="/logs/:index" element={<Show/>}/>
      </Routes>
    </main>
  );
}

export default App;
