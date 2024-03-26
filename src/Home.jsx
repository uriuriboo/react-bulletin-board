// @ts-check
import { useState, useEffect } from 'react';

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
            <div className="HeaderContainer">
                <p className='title'>掲示板</p>
                <a href='./'>スレッドをたてる</a>
            </div>
            <div className='ThreadContainer'>
                <p className='contentTitle'>新着スレッド</p>
                <div className="ThreadView">
                    {threads.map((thread, index) => (
                        <div key={index} className='thread'>
                            <p>{thread.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home