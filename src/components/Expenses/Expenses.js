import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const classes = 'expenses ' + props.className;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = props.expenses.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear);

    return (
        <li>
            <Card className={classes}>
                <ExpensesFilter selected={filteredYear} onFilterByYear={filterChangeHandler}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </li>
    );
}

export default Expenses;
