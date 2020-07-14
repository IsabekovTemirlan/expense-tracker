import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions: [],
  theme: false
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  const addTransaction = (obj) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: obj
    })
  }

  const changeTheme = () => {
    dispatch({
      type: 'CHANGE_THEME'
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
      changeTheme,
      theme: state.theme
    }}>
    {children}
    </GlobalContext.Provider>
  )
}
