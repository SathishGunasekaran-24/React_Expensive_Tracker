import React, { useContext } from 'react';
import {GlobalContext} from '../context/Globalstate';
const Income = () => {
    const {transactions} = useContext(GlobalContext);
    const incomeamount = transactions.map(transactions=>transactions.amount>0?transactions.amount:0);
    const income = incomeamount.reduce((income,item)=>(income+=item),0).toFixed(2);
    const expenseamounts = transactions.map(transactions=>transactions.amount<0?transactions.amount:0);
    const expense = Math.abs(expenseamounts.reduce((total,item)=>(total+=item),0)).toFixed(2);
    console.log(incomeamount)
    return (
        <div className="inc-exp-container">
            <div >
                <h4>
                    Income
                </h4>
            <p className="money plus">${income}</p>
            </div>
            <div >
                <h4>
                    Expense
                </h4>
                <p className="money minus">${expense}</p>
            </div>
        </div>
    )
}

export default Income;