import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {

    const classes = 'expenses ' + props.className;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year)
    };

    const expenseItems = props.expenses.map((expenseItem) =>
        <ExpenseItem expense={expenseItem}/>
    );

    return (
        <Card className={classes}>
            <ExpensesFilter selected={filteredYear} onFilterByYear={filterChangeHandler}/>
            {expenseItems}
        </Card>
    );
}

export default Expenses;
