// @ts-check
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Thread = () => {
    const ThreadTitle = 'TechTrain';
    const {ThreadId} = useParams();
    const [ThreadData,setThreadData] = useState(null);
    const { state } = useLocation();
    const threadTitle = state && state.title;

    useEffect(() => {
        const fetchThreadData = async () => {
            try {
                const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${ThreadId}/posts`);
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
    },[]);
    const comments = '';


    return (
        <div className="Thread">
                {ThreadData && (
                <div className="ThreadContent">
                <p>{ThreadData.title}</p>
                <div className="Comments">{comments}</div>
                    <ul>
                        {ThreadData.posts.map((postData) => (
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

export default Thread