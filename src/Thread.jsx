import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from './components/Header';

export const Thread = () => {
    const { threadId } = useParams();
    const { state } = useLocation();
    const threadTitle = state && state.title;

    const [threadData, setThreadData] = useState(null);

    useEffect(() => {
        const fetchThreadData = async () => {
            try {
                const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`);
                if (!response.ok) {
                    throw new Error('Failed to fetch thread data');
                }
                const data = await response.json();
                setThreadData(data);
            } catch (error) {
                console.error('Error fetching thread data:', error);
            }
        };

        fetchThreadData();
    }, [threadId]);

    return (
        <div className="Thread">
            <Header />
            {threadData && (
                <div className="ThreadContent">
                    <p>{threadTitle}</p>
                    <ul>
                        {threadData.posts.map((postData) => (
                            <li key={postData.id}>{postData.post}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="SubmitContainer">
                <input />
                <button>投稿</button>
            </div>
        </div>
    )
}

export default Thread;
