import { useState } from 'react'
import Slide from '../../components/Slide'
import hero from '../../assets/ai-vnedreniya/av-hero.png'
import who from '../../assets/ai-vnedreniya/av-who.png'
import mini from '../../assets/ai-vnedreniya/av-mini.png'
import './AiVnedreniya.css'

const views = [
  {
    key: 'hero',
    image: hero,
    title: 'Посадочная страница услуги',
  },
  {
    key: 'who',
    image: who,
    title: 'Сегментация аудитории по нишам',
  },
  {
    key: 'mini',
    image: mini,
    title: 'Интерактивный подбор решения',
  },
]

export default function AiVnedreniya() {
  const [activeKey, setActiveKey] = useState('hero')
  const active = views.find((view) => view.key === activeKey)
  const thumbnails = views.filter((view) => view.key !== activeKey)

  return (
    <Slide number="04" className="ai-vnedreniya">
      <p className="ai-vnedreniya__eyebrow">Пример реализованного проекта</p>

      <h1 className="ai-vnedreniya__title">
        «СамостоятельныеЗапуски» — лендинг и мини-анкета по подбору AI-решений
      </h1>

      <p className="ai-vnedreniya__subtitle">
        Посадочная страница с сегментацией по нишам и интерактивная анкета, которая доводит
        посетителя до готовой заявки
      </p>

      <div className="ai-vnedreniya__body">
        <div className="ai-vnedreniya__main">
          <div className="ai-vnedreniya__main-image">
            <img src={active.image} alt={active.title} />
          </div>
          <p className="ai-vnedreniya__main-title">{active.title}</p>
        </div>

        <div className="ai-vnedreniya__cards">
          {thumbnails.map((view) => (
            <button
              type="button"
              className="ai-vnedreniya__card"
              key={view.key}
              onClick={() => setActiveKey(view.key)}
            >
              <div className="ai-vnedreniya__card-image">
                <img src={view.image} alt={view.title} />
              </div>
              <p className="ai-vnedreniya__card-title">
                <span>{view.title}</span>
                <span className="ai-vnedreniya__card-hint">Открыть ↗</span>
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="ai-vnedreniya__footer">
        <p className="ai-vnedreniya__note">
          Проект создан для продвижения AI-услуг, но та же логика — посадочная страница с чёткой
          сегментацией аудитории и интерактивная анкета вместо статичной формы — применима к
          продвижению консалтинга, франшиз и других B2B-направлений
        </p>

        <p className="ai-vnedreniya__caption">Собственная разработка</p>
      </div>
    </Slide>
  )
}
