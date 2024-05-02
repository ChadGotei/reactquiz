import "./styles.css";
import Header from "./Header";
import React, { useReducer } from 'react';

const initialState = {
    balance: 0,
    loan: 0,
    isLoan: false,
    isActive: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'opened':
            return {
                ...state,
                isActive: true,
                balance: 500
            }

        case 'deposit':
            return {
                ...state,
                balance: state.balance + action.payload,
            }

        case 'withdraw':
            return {
                ...state,
                balance: state.balance > 0 ? state.balance - action.payload : state.balance,
            }

        case 'askLoan':
            return {
                ...state,
                balance: state.isLoan === false ? state.balance + action.payload : state.balance,
                isLoan: true,
                loan: action.payload,
            }

        case 'payLoan':
            const isLoanPaid = state.isLoan && state.balance > 5000;

            return {
                ...state,
                isLoan: isLoanPaid ? false : state.isLoan,
                balance: isLoanPaid ? state.balance - action.payload : state.balance,
                loan: isLoanPaid ? state.loan - action.payload : state.loan
            }


        case 'closed':
            return {
                ...(state.balance === 0 ? initialState : state)
            }


        default:
            return state;
    }
}

export default function App() {
    const [{ balance, loan, isLoan, isActive }, dispatch] = useReducer(reducer, initialState);
    const depositVal = 150;
    const withdrawVal = 50;
    const loanVal = 5000;

    return (
        <div className="App">
            <Header />

            <div className="bl-container">
                <p className="bl-text">Balance: {balance}</p>
                {loan !== 0 && <p className="bl-text">Loan: {loan}</p>}
            </div>

            <div className="btn-container">

                <button
                    disabled={isActive}
                    onClick={() => dispatch({ type: 'opened' })}
                >
                    Open Account
                </button>

                <button
                    onClick={() => dispatch({ type: 'deposit', payload: depositVal })}
                    disabled={!isActive}
                >
                    Deposit 150
                </button>

                <button
                    onClick={() => dispatch({ type: 'withdraw', payload: withdrawVal })}
                    disabled={!isActive}
                >
                    Withdraw 50
                </button>

                <button
                    onClick={() => dispatch({ type: 'askLoan', payload: loanVal })}
                    disabled={!isActive || isLoan}
                >
                    Request Loan 5000
                </button>

                <button
                    onClick={() => dispatch({ type: 'payLoan', payload: loanVal })}
                    disabled={!isActive || !isLoan}
                >
                    Pay Loan
                </button>

                <button
                    onClick={() => dispatch({ type: 'closed' })}
                    disabled={!isActive}
                >
                    Close Account
                </button>


            </div>

        </div >
    );
}
