import React,{useContext} from 'react';
import {GlobalContext} from '../context/Globalstate';
import Transaction from './Transaction';
const History = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <h4>History</h4>
            <ul className="list">
            {transactions.map(transaction => (
<Transaction key={transaction.id} transaction={transaction}/>
            ))}

            </ul>
        </div>
    )

}
export default History;