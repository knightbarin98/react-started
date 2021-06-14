import React, {useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const  [title,setTitle] = useState(props.title);
  
  const clickHandler = () =>{
    setTitle('Updated');
  }

  return (
    //Card is wrapper
    //You can not add directly a class into a component in order to that you must do what is explicit in Card.js
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
