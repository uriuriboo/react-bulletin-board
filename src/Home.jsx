// @ts-check
import { useState, useEffect } from 'react';
import Header from './components/Header';
import './css/Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

export const Home = () => {
    const ThreadUrl = 'https://railway.bulletinboard.techtrain.dev/threads';
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const getThreads = async () => {
            try {
                const response = await axios.get(ThreadUrl);
                setThreads(response.data);
            } catch (error) {
                console.error('Error fetching threads:', error);
            }
        };
        getThreads();
    }, [])

    return (
        <div>
            <Header />
            <div className='ThreadContainer'>
                <p className='contentTitle'>新着スレッド</p>
                <div className="ThreadView">
                    {threads.map((thread, index) => (
                        <div key={index} className='HomeThread'>
                        <p><Link to={{
                                    pathname: `/thread/${thread.id}`,
                                    state: { title: thread.title }
                            }}>
                            {thread.title}
                            </Link></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home