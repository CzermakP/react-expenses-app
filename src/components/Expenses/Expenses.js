import  React, { useState } from "react";

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const yearFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => { 
        /* filter() returns a NEW array of filtered items based on the 'filteredYear' */
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeYearFilter={yearFilterChangeHandler} 
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />     
            </Card>
        </div>
    );
}
export default Expenses;