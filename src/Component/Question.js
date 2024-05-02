function Question({ question, answer, dispatch }) {
    const hasAnswered = answer !== null;

    return (
        <div>
            <h4>
                {question.question}
            </h4>
            <div className="options">
                {question.options.map((option, i) =>
                    <button
                        className={`btn btn-option ${i === answer ? 'answer' : ''} ${hasAnswered ? i === question.correctOption ? 'correct' : 'wrong' : ''}`}
                        key={option}
                        onClick={() => dispatch({ type: 'newAnswer', payload: i })}
                        disabled={hasAnswered}    
                    >
                        {option}
                    </button>
                )}
            </div>
            {/* // or a new component for this  */}
        </div>
    )
}

export default Question
