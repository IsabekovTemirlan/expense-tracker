import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions, theme } = useContext(GlobalContext)
  const amounts = transactions.map( t => t.amount)

  const income = amounts.filter(i => i > 0).reduce((p, c) => p += c, 0).toFixed(2)

  const expens = amounts.filter(i => i < 0).reduce((p, c) => p += c, 0).toFixed(2) * -1

  return (
    <div className="inc-exp-container" style={{background: theme ? '#484848' : '#fff'}}>
      <div>
        <h4 style={{color: theme ? '#fff' : '#000'}}>Доход</h4>
        <p id="money-plus" className="money plus">$ {income}</p>
      </div>
      <div>
        <h4 style={{color: theme ? '#fff' : '#000'}}>Расход</h4>
        <p id="money-minus" className="money minus">$ {expens}</p>
      </div>
    </div>
  )
}
