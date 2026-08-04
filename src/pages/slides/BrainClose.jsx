import Slide from '../../components/Slide'
import './BrainClose.css'

const comparison = [
  {
    mass: 'Один и тот же инструмент у сотен пользователей',
    brain: 'Архитектура строится под конкретный бизнес и его процессы',
  },
  {
    mass: 'Работает по общим шаблонам и сценариям',
    brain: 'Учитывает специфику именно ваших направлений — от госзаказа до стоматологии',
  },
  {
    mass: 'Данные и настройки не принадлежат вам',
    brain: 'Знания и данные остаются внутри вашего бизнеса',
  },
  {
    mass: 'Доступен любому конкуренту в любой момент',
    brain: 'Разрабатывается для ограниченного круга клиентов с персональной работой',
  },
  {
    mass: 'Развивается в интересах всех пользователей сразу',
    brain: 'Развивается в направлении, которое определяет собственник',
  },
]

const reasons = [
  {
    title: 'Индивидуальная архитектура',
    desc: 'Система строится под конкретные процессы, продукты и ниши бизнеса, а не подгоняется под шаблон.',
  },
  {
    title: 'Ограниченный круг клиентов',
    desc: 'Количество проектов в разработке сознательно ограничено ради глубины персональной работы.',
  },
  {
    title: 'Закрытые данные и знания',
    desc: 'Вся база остаётся внутри вашего бизнеса и не используется в чужих проектах.',
  },
  {
    title: 'Прямое участие собственника',
    desc: 'Приоритеты и направление развития системы определяет владелец бизнеса, а не общий продукт.',
  },
]

export default function BrainClose() {
  return (
    <Slide number="11" className="brain-close">
      <p className="brain-close__eyebrow">Эксклюзивная разработка</p>
      <h1 className="brain-close__title">
        BRAIN — конкурентное преимущество,
        <br />
        которое нельзя скопировать
      </h1>
      <p className="brain-close__subtitle">
        Большинство AI-инструментов доступны всем и одинаковы для всех. BRAIN создаётся
        индивидуально — под ваш бизнес, ваши процессы и ваши ниши
      </p>

      <div className="brain-close__body">
        <div className="brain-close__table">
          <div className="brain-close__table-head">
            <span>Массовый AI-сервис</span>
            <span className="brain-close__table-head-accent">BRAIN для вашего бизнеса</span>
          </div>
          {comparison.map((row) => (
            <div className="brain-close__table-row" key={row.brain}>
              <p className="brain-close__table-cell brain-close__table-cell--mass">{row.mass}</p>
              <p className="brain-close__table-cell brain-close__table-cell--brain">{row.brain}</p>
            </div>
          ))}
        </div>

        <div className="brain-close__reasons">
          {reasons.map((reason) => (
            <div className="brain-close-reason" key={reason.title}>
              <p className="brain-close-reason__title">{reason.title}</p>
              <p className="brain-close-reason__desc">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="brain-close__statement">
          <p>
            Пока конкуренты пользуются одинаковыми инструментами, у вас будет система, которую
            невозможно купить готовой.
          </p>
          <p className="brain-close__statement-secondary">
            BRAIN — это не расходы на очередной сервис, а инвестиция в управляемость и рост
            бизнеса, которая работает только на вас.
          </p>
        </div>
      </div>

      <p className="brain-close__note">
        BRAIN — эксклюзивная разработка в статусе персонального проекта. Круг клиентов, с которыми
        ведётся работа, ограничен.
      </p>
    </Slide>
  )
}
