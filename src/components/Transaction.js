import React, { useContext } from 'react';
import {GlobalContext} from '../context/Globalstate';
const Transaction = (props) => {
    const sign = props.transaction.amount>0?'+':'-'
    const {deleteTransaction} = useContext(GlobalContext);
    return(
        <li className={sign==='+'?'plus':'minus'}>
        {props.transaction.text}<span>{sign}${Math.abs(props.transaction.amount)}</span><button onClick={()=>deleteTransaction(props.transaction.id)} className="delete-btn">X</button>
    </li>
    )
}

export default Transaction;