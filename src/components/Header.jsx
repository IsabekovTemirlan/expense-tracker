import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Header = () => {
  const { changeTheme, theme } = useContext(GlobalContext)

  if (theme) {
    document.body.style.background = '#2d2d2d'
    document.body.style.color = '#ccc'
  } else {
    document.body.style.background = '#f7f7f7'
    document.body.style.color = '#222'
  }

  return (
    <div className="change-theme">
      <h1>Кошелёк</h1>
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={theme}
          onChange={changeTheme}
        />
      <label htmlFor="checkbox">{theme ? "Dark": "Light"}</label>
      </div>
    </div>
  )
}
