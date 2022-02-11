// for rendering the look and feel of the card container (box-shadow + border-radius)
// props.children => children will always take the data from within the <Card> tag in ExpenseItem.js
// props.className => ensures the css is being used from Card.css AND ExpenseItem.css

import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;