import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css"

const ExpensesList = props => {

    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    const expenseContent = props.expenses.map((expense) => <ExpenseItem key={expense.id} expense={expense}/>);

    return (
        <ul className="expenses-list">
            {expenseContent}
        </ul>
    );
};

export default ExpensesList;