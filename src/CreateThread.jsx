// @ts-check

import './css/CreateThread.css'
import Header from './components/Header'

export const CreateThread = () => {
    var ThreadTitle = {'title':''}
    return (
        <div className="CreateThread">
            <Header />
            <h1>スレッドを新規作成</h1>

            <input type="text" placeholder="スレッドタイトル" />
            <div className='FlexContainer'>
                <a href="/">Topに戻る</a>
                <button>作成</button>
            </div>

        </div>
    )
}

export default CreateThread