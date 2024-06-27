// Dependencies
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";

// Components
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default App;
