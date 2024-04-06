// @ts-check
import { useState, useEffect } from 'react';
import Header from './components/Header';
import './css/Home.css'

export const Home = () => {
    const ThreadUrl = 'https://railway.bulletinboard.techtrain.dev/threads';
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const getTreads = async () => {
            const response = await fetch(ThreadUrl);
            const data = await response.json();
            setThreads(data);
        }
        getTreads()
    }, [])

    return (
        <div>
            <Header />
            <div className='ThreadContainer'>
                <p className='contentTitle'>新着スレッド</p>
                <div className="ThreadView">
                    {threads.map((thread, index) => (
                        <div key={index} className='HomeThread'>
                            <p><a href={`/thread/${thread.id}`}>{thread.title}</a></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home