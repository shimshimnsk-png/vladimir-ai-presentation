import { useState } from 'react'
import Slide from '../../components/Slide'
import home from '../../assets/yrist/yrist-home.png'
import benefits from '../../assets/yrist/yrist-benefits.png'
import './YristCase.css'

const views = [
  {
    key: 'home',
    image: home,
    title: 'Главный экран сервиса',
  },
  {
    key: 'benefits',
    image: benefits,
    title: 'Пошаговый подбор льгот и выплат',
  },
]

export default function YristCase() {
  const [activeKey, setActiveKey] = useState('home')
  const active = views.find((view) => view.key === activeKey)
  const other = views.find((view) => view.key !== activeKey)

  return (
    <Slide number="03" className="yrist-case">
      <p className="yrist-case__eyebrow">Пример реализованного проекта</p>

      <h1 className="yrist-case__title">
        «Социальный юрист» — сервис подбора льгот, выплат и документов
      </h1>

      <p className="yrist-case__subtitle">
        Пошаговый подбор доступных выплат, генератор документов, AI-чат и личный кабинет клиента
        в одном сервисе
      </p>

      <div className="yrist-case__body">
        <div className="yrist-case__main">
          <div className="yrist-case__main-image">
            <img src={active.image} alt={active.title} />
          </div>
          <p className="yrist-case__main-title">{active.title}</p>
        </div>

        <button
          type="button"
          className="yrist-case__card"
          onClick={() => setActiveKey(other.key)}
        >
          <div className="yrist-case__card-image">
            <img src={other.image} alt={other.title} />
          </div>
          <p className="yrist-case__card-title">
            <span>{other.title}</span>
            <span className="yrist-case__card-hint">Открыть ↗</span>
          </p>
        </button>
      </div>

      <div className="yrist-case__footer">
        <p className="yrist-case__note">
          Система создана для юридического сервиса в сфере социальных льгот, но та же логика —
          пошаговый подбор решений, генерация документов и AI-сопровождение клиента — применима к
          консалтингу, госзаказу и работе с обращениями клиентов
        </p>

        <p className="yrist-case__caption">Показано с согласия владельца проекта</p>
      </div>
    </Slide>
  )
}
