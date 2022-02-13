import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <p className='expenses-list__fallback'>No Expenses Found!</p>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id} /* important to define 'key' when using 'map()' for ensuring list items accurate */
                    title={expense.title} 
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};
export default ExpensesList;