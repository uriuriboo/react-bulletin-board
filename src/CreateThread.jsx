// @ts-check

import React,{useState} from 'react'
import axios from 'axios'
import './css/CreateThread.css'
import Header from './components/Header'

export const CreateThread = () => {
    const postUrl = 'https://railway.bulletinboard.techtrain.dev/threads'
    const [ThreadTitle,setThreadTitle] = useState('');
    const handleInputChange = (e) => {
        setThreadTitle(e.target.value)
    }
    const handlePost = () => {
        const postData = {title:ThreadTitle}
        axios.post(postUrl,postData)
        .then((response) => {
            console.log('正常に投稿されました:', response.data)
        })
        .catch((error) => {
            console.log('投稿中にエラーが発生しました:',error)
        })
        setThreadTitle('')
    }


    return (
        <div className="CreateThread">
            <Header />
            <h1>スレッドを新規作成</h1>

            <input type="text"
            placeholder="スレッドタイトル"
            value={ThreadTitle}
            onChange={handleInputChange}
            />
            <div className='FlexContainer'>
                <a href="/">Topに戻る</a>
                <button onClick={handlePost}>スレッドを作成</button>
            </div>

        </div>
    )
}

export default CreateThread