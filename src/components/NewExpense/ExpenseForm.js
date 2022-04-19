import React, {useState} from "react";

const ExpenseForm = () => {
    const today = new Date().toISOString().split('T')[0];

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    };
    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    };
    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: parseFloat(userInput.enteredAmount),
            date: new Date(userInput.enteredDate)
        };
        setUserInput(() => {
            return { ...userInput, enteredTitle: '', enteredDate: '', enteredAmount: '' };
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.enteredDate} min="2019-01-01" max={today} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;