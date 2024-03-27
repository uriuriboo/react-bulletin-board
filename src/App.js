import './css/App.css';
import Home from './Home';
import CreateThread from './CreateThread'
import Thread from './Thread';
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";
// import './Threads'

function App() {
  return(
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/thread/new' element={<CreateThread />} />
          <Route path='/thread' element={<Thread />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App;
