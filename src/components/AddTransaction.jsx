import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const [text, setText] = React.useState('')
  const [amount, setAmount] = React.useState(0)

  const { addTransaction, theme } = useContext(GlobalContext)

  const onSubmitForm = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount
    }
    if (text.trim() && amount.trim()) {
      addTransaction(newTransaction)
    } else {
      alert('Пожалуйста заполните поля')
    }

    setText('')
    setAmount(0)
  }

  return (
    <>
      <h3>Добавить транзауцию</h3>
      <form id="form" onSubmit={onSubmitForm}>
        <div className="form-control">
          <label htmlFor="text">Название</label>
          <input
            style={{background: theme ? '#a9a9a9' : '#fff'}}
            type="text"
            id="text"
            value={text}
            onChange={ (e) => setText(e.target.value)}
            placeholder="Введите название..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Сумма <br />
          (отрицательное - расход, положительное - доход)</label
          >
          <input
            style={{background: theme ? '#a9a9a9' : '#fff'}}
            type="number"
            id="amount"
            value={amount}
            onChange={ (e) => setAmount(e.target.value)}
            placeholder="Введите сумму..." />
        </div>
        <button className="btn" type='submit'>Добвить транзауцию</button>
      </form>
    </>
  )
}
