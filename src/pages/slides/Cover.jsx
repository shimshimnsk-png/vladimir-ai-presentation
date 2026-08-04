import Slide from '../../components/Slide'
import './Cover.css'

const cards = [
  {
    title: 'Маркетинг',
    text: 'Сегментация аудитории, предложения под разные ниши, продвижение и аналитика',
  },
  {
    title: 'Контент',
    text: 'Контент-планы, экспертные материалы, кейсы, статьи, презентации и рассылки',
  },
  {
    title: 'Продажи',
    text: 'Обработка заявок, квалификация клиентов, коммерческие предложения и повторные касания',
  },
  {
    title: 'Агентская система',
    text: 'Привлечение, обучение, сопровождение и контроль результатов агентов',
  },
]

export default function Cover() {
  return (
    <Slide number="01" className="cover">
      <p className="cover__eyebrow">Персональная презентация · Владимир Заморенов</p>

      <h1 className="cover__title">
        AI-решения для автоматизации маркетинга, контента, продаж и агентской сети
      </h1>

      <p className="cover__subtitle">
        Предварительная концепция для бизнеса в направлениях: консалтинг, госзаказ,
        франшизы, недвижимость и стоматология
      </p>

      <div className="cover__cards">
        {cards.map((card) => (
          <div className="cover__card" key={card.title}>
            <div className="cover__card-mark" />
            <h3 className="cover__card-title">{card.title}</h3>
            <p className="cover__card-text">{card.text}</p>
          </div>
        ))}
      </div>

      <p className="cover__footer">Подготовлено Олесей Лихановой</p>
    </Slide>
  )
}
