import './css/App.css';
import Home from './Home';
import CreateThread from './CreateThread'
import Thread from './Thread';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './Threads'

function App() {
  return(
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create_thread' element={<CreateThread />} />
        <Route path='/thread/:threadId' element={<Thread />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App;
