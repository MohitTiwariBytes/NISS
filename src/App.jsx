import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
            <Home></Home>
          }/>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
