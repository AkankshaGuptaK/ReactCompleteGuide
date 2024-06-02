import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  let expenses = props.items;

  return (
    <div>
      <Card className="expenses">
        <ExpenseItem
          title = {expenses[0].title}
          amount= {expenses[0].amount}
          date = {expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title = {expenses[1].title}
          amount= {expenses[1].amount}
          date = {expenses[1].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
