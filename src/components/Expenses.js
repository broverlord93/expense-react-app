import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {

    const expenseItems = props.expenses.map((expenseItem) =>
        <ExpenseItem expense={expenseItem}/>
    );

    return (
        <div className="expenses">
            {expenseItems}
        </div>
    );
}

export default Expenses;
