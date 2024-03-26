import './App.css';
import './Header';
import Home from './Home';
import CreateThread from './CreateThread'
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";
// import './Threads'

function App() {
  return(
  <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/create_thread' element={<CreateThread />} />
    </Routes>
    </div>
    
  </BrowserRouter>
  )
}

export default App;
