import ExpenseItem from "./components/ExpenseItem";

function App() {
    const appDate = new Date(2022,2,28);

  return (
    <div>
      <h2>Let's get started!</h2>
        <ExpenseItem
            title="Title"
            amount="420.69"
            date={appDate}
        ></ExpenseItem>
    </div>
  );
}

export default App;
