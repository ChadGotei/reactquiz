function StartScreen({numQuestions, dispatch}) {
    return (
        <div className="start">
            <h2>Welcome to the Football quiz!</h2>
            <h3>{numQuestions} questions to test your ball knowledge</h3>
            <button className="btn btn-ui" onClick={() => dispatch({type: 'start'})}>Let's start</button>
        </div>
    )
}

export default StartScreen;
