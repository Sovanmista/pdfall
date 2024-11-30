import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Sections from './component/Sections';
import Footer from './component/Footer';
import Credits from './component/Credits';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
     </div>
    </BrowserRouter>
   
  );
}

export default App;
