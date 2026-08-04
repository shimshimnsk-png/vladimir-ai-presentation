import { useState } from 'react'
import Slide from '../../components/Slide'
import dashboard from '../../assets/remont-pro/remont-dashboard.png'
import projects from '../../assets/remont-pro/remont-projects.png'
import roles from '../../assets/remont-pro/remont-roles.png'
import finance from '../../assets/remont-pro/remont-finance.png'
import './RemontPro.css'

const views = [
  {
    key: 'dashboard',
    image: dashboard,
    title: 'Дашборд собственника',
  },
  {
    key: 'projects',
    image: projects,
    title: 'Управление проектами и процессами',
  },
  {
    key: 'roles',
    image: roles,
    title: 'Доступ сотрудников по ролям',
  },
  {
    key: 'finance',
    image: finance,
    title: 'Финансы и аналитика собственника',
  },
]

const chainSteps = ['Клиенты', 'Проекты', 'Сотрудники', 'Задачи', 'Оплаты', 'Аналитика']

export default function RemontPro() {
  const [activeKey, setActiveKey] = useState('dashboard')
  const active = views.find((view) => view.key === activeKey)
  const thumbnails = views.filter((view) => view.key !== activeKey)

  return (
    <Slide number="02" className="remont-pro">
      <div className="remont-pro__status-row">
        <p className="remont-pro__eyebrow">Пример реализованного проекта</p>
        <span className="status-badge">Разработанный MVP</span>
      </div>

      <h1 className="remont-pro__title">
        «Ремонт Про» — пример готовой системы управления бизнесом
      </h1>

      <p className="remont-pro__subtitle">
        Клиенты, сотрудники, задачи, проекты, оплаты и аналитика собственника в едином
        пространстве
      </p>

      <div className="remont-pro__body">
        <div className="remont-pro__main">
          <div className="remont-pro__main-image">
            <img src={active.image} alt={active.title} />
          </div>
          <p className="remont-pro__main-title">{active.title}</p>
        </div>

        <div className="remont-pro__cards">
          {thumbnails.map((view) => (
            <button
              type="button"
              className="remont-pro__card"
              key={view.key}
              onClick={() => setActiveKey(view.key)}
            >
              <div className="remont-pro__card-image">
                <img src={view.image} alt={view.title} />
              </div>
              <p className="remont-pro__card-title">
                <span>{view.title}</span>
                <span className="remont-pro__card-hint">Открыть ↗</span>
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="remont-pro__footer">
        <p className="remont-pro__note">
          Система создана для ремонтной компании, но сама логика может быть адаптирована под
          бизнес-консалтинг, работу с клиентами, агентскую сеть, продажи и управление
          несколькими направлениями
        </p>

        <div className="remont-pro__chain">
          {chainSteps.map((step, index) => (
            <span className="remont-pro__chain-item" key={step}>
              <span className="remont-pro__chain-label">{step}</span>
              {index < chainSteps.length - 1 && (
                <span className="remont-pro__chain-arrow">→</span>
              )}
            </span>
          ))}
        </div>

        <p className="status-caption">
          Спроектирована и разработана основная система: дашборд собственника, объекты,
          сотрудники, задачи, оплаты и аналитика
        </p>
      </div>
    </Slide>
  )
}
