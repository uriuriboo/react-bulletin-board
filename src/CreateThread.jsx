// @ts-check


export const CreateThread = () => {

    return (
        <div className="CreateThread">
            <h1>スレッドを新規作成</h1>
            <input type="text" placeholder="スレッドタイトル" />
            <a href="/">Topに戻る</a>
            <button>作成</button>
        </div>
    )
}

export default CreateThread