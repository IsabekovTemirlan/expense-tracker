import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ id, amount, text }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = amount < 0 ? '-' : '+'

  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text} <span>{sign} ${Math.abs(amount)}</span>
    <button
      className="delete-btn"
      onClick={ () => deleteTransaction(id)}
    >x</button>
    </li>
  )
}
