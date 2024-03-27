// @ts-check


export const Thread = () => {
    const ThreadTitle = 'TechTrain';
    const comments = '';
    return (
        <div className="Thread">
            <div className="ThreadContent">
                <p>{ThreadTitle}</p>
                <div className="Comments">{comments}</div>
            </div>
            <div className="SubmitContainer">
                <input />
                <button>投稿</button>
            </div>
        </div>
    )
}

export default Thread