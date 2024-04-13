import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import './css/Thread.css'

export const Thread = () => {
    const { threadId } = useParams();
    const {state} = useLocation();
    console.log(useLocation())
    const [newPost, setNewPost] = useState('');
    const [threadData, setThreadData] = useState(null);
    const ThreadUrl = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`
    const threadTitle = state && state.title;

    useEffect(() => {
        const getThreadData = async () => {
            try {
                const response = await axios.get(ThreadUrl);
                setThreadData(response.data);
            } catch (error) {
                console.error('スレッドデータの取得エラー:', error);
            }
        };

        getThreadData();
    }, [ThreadUrl]);

    const handlePostSubmit = async () => {
        try {
            await axios.post(ThreadUrl, {post: newPost});
            const response = await axios.get(ThreadUrl);
            setThreadData(response.data);
            setNewPost('');
        }
        catch (error){
            console.error('投稿エラー:', error);
        }
    }

    return (
        <div>
            <Header />
            <div className="Thread">
            <h1 className='ThreadTitle'>{threadTitle}</h1>
            <div className="ThreadMain">
                {threadData && (
                    <div className="ThreadContent">
                            {threadData.posts.map((postData) => (
                                <p className="post" key={postData.id}>{postData.post}</p>
                            ))}
                    </div>
                )}

                <div className="SubmitContainer">
                    <textarea className="submitText" type="text"
                    placeholder="投稿しよう！"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    />

                    <button className="submitButton" onClick={handlePostSubmit}>投稿</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Thread;
