import React, { useContext } from 'react';
import {GlobalContext} from '../context/Globalstate';
const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transactions=>transactions.amount);
    const total = amounts.reduce((total,item)=>(total+=item),0).toFixed(2);
    console.log(total);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>{total}</h1>
        </div>
    )
}

export default Balance;