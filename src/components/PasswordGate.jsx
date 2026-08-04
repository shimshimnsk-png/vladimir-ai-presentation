import { useState } from 'react'
import './PasswordGate.css'

const PASSWORD = 'zamorenov2026'
const STORAGE_KEY = 'vladimir-preza-unlocked'

function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === 'true'
  )
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      setUnlocked(true)
    } else {
      setError(true)
    }
  }

  if (unlocked) return children

  return (
    <div className="password-gate">
      <form className="password-gate__card" onSubmit={handleSubmit}>
        <span className="password-gate__label">Презентация</span>
        <h1 className="password-gate__title">Введите пароль для доступа</h1>
        <input
          type="password"
          autoFocus
          className="password-gate__input"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setError(false)
          }}
          placeholder="Пароль"
        />
        {error && <span className="password-gate__error">Неверный пароль</span>}
        <button type="submit" className="password-gate__submit">
          Войти
        </button>
      </form>
    </div>
  )
}

export default PasswordGate
