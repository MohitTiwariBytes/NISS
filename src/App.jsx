import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import AdminPanel from "./Pages/Admin/Admin";
import DataEntry from "./Pages/Data-Entry/DataEntry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/admin" element={<AdminPanel></AdminPanel>}></Route>
        <Route path="/dataEntry" element={<DataEntry></DataEntry>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
