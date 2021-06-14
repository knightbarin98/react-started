
import './Card.css';

const Card = (props)=>{
    //To add what it will wrapped
    //It is call from ExpensesItem

    //So I can add more classes from the imported component
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;