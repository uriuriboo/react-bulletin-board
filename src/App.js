import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import './Header';
// import './Threads'

function App() {
  const ThreadUrl = 'https://railway.bulletinboard.techtrain.dev/threads';
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const getTreads = async () => {
      const response = await fetch(ThreadUrl);
      const data = await response.json();
      setThreads(data);
    }
    getTreads()
  },[])

  return (
    <div className="App">
      <header><div className="HeaderContainer">
        <h1>掲示板</h1>
        <p>スレッドをたてる</p>
      </div>
      </header>

    <div className='ThreadContainer'></div>
      <p>新着スレッド</p>
      <div className="ThreadView">
      {threads.map((thread,index) => (
        <div key={index}>
          <p>{thread.title}</p>
        </div>
      ))}
      </div>

    </div>
  );
}

export default App;
