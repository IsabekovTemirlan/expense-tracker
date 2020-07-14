import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  return (
    <>
      <h3>История</h3>
      <ul id="list" className="list">
        {transactions.length > 0 ? transactions.map( t => (
          <Transaction
            id={t.id}
            key={t.id}
            text={t.text}
            amount={t.amount}
          />))
          : <p style={{textAlign: 'center', color: '#777'}}>Транзакций нет</p>
        }

      </ul>
    </>
  )
}
