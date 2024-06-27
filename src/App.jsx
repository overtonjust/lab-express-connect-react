// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Show from "./Pages/Show/Show";
import New from "./Pages/New/New";
import Edit from "./Pages/Edit/Edit";

// Components
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to='/logs'/>} />
        <Route path="/logs" index element={<Home/>}/>
        <Route path="/logs/new" element={<New/>}/>
        <Route path="/logs/:index" element={<Show/>}/>
        <Route path="/logs/:index/edit" element={<Edit/>}/>
      </Routes>
    </main>
  );
}

export default App;
