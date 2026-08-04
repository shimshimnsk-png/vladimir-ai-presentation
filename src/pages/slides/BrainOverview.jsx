import Slide from '../../components/Slide'
import './BrainOverview.css'

const cards = [
  {
    n: '01',
    title: 'Единая картина бизнеса',
    desc: 'Все данные бизнеса — в одном месте, без ручного сбора информации.',
  },
  {
    n: '02',
    title: 'Проактивная работа',
    desc: 'Не только выполняет поручения, но и подсказывает, что делать дальше.',
  },
  {
    n: '03',
    title: 'AI-команда в одной системе',
    desc: 'Функции маркетолога, стратега, продажника, аналитика и финансиста — вместе.',
  },
  {
    n: '04',
    title: 'Приоритеты вместо шума',
    desc: 'Показывает главное, а не всё подряд.',
  },
  {
    n: '05',
    title: 'Корпоративная память',
    desc: 'Знания компании сохраняются в системе, а не только в головах сотрудников.',
  },
  {
    n: '06',
    title: 'Контроль без микроменеджмента',
    desc: 'Видно, что просрочено и где нет ответственного — без ручных проверок.',
  },
  {
    n: '07',
    title: 'Связь между отделами',
    desc: 'Маркетинг, продажи, контент и финансы работают на одни цели.',
  },
  {
    n: '08',
    title: 'Масштабирование без хаоса',
    desc: 'Новые направления и люди подключаются без потери управляемости.',
  },
]

export default function BrainOverview() {
  return (
    <Slide number="09" className="brain-overview">
      <p className="brain-overview__eyebrow">BRAIN</p>

      <h1 className="brain-overview__title">BRAIN — цифровой мозг бизнеса</h1>

      <p className="brain-overview__subtitle">
        Система, которая не просто выполняет поручения, а анализирует бизнес, определяет
        приоритеты и помогает собственнику принимать решения
      </p>

      <div className="brain-overview__quote">
        <p>
          BRAIN отвечает не только на вопрос «Как выполнить задачу?», но и показывает, какую
          задачу необходимо выполнить сейчас, почему она важна и как повлияет на бизнес
        </p>
      </div>

      <div className="brain-overview__grid">
        {cards.map((card) => (
          <div className="brain-card" key={card.n}>
            <span className="brain-card__n">{card.n}</span>
            <p className="brain-card__title">{card.title}</p>
            <p className="brain-card__desc">{card.desc}</p>
          </div>
        ))}
      </div>

      <p className="brain-overview__note">
        BRAIN разрабатывается как персональная система под задачи вашего бизнеса. Реализация идёт
        поэтапно: первыми подключаются направления с наибольшим эффектом
      </p>
    </Slide>
  )
}
