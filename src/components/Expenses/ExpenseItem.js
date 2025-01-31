import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props){

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h1>{props.title}</h1>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;