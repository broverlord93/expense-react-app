import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(props) {

    const classes = 'expenses ' + props.className;

    const expenseItems = props.expenses.map((expenseItem) =>
        <ExpenseItem expense={expenseItem}/>
    );

    return (
        <Card className={classes}>
            {expenseItems}
        </Card>
    );
}

export default Expenses;
