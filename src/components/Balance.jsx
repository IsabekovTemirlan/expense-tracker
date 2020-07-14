import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map( t => t.amount)
  const total = amounts.reduce((p, c) => p += c, 0).toFixed(2)

  return <>
    <h4>Ваш баланс</h4>
    <h1 id="balance">$ {total}</h1>
  </>
}
