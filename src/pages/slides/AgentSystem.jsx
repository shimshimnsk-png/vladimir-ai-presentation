import Slide from '../../components/Slide'
import './AgentSystem.css'

const steps = [
  {
    n: '01',
    title: 'Подключение агента',
    desc: 'Регистрация, анкета и определение направления работы',
  },
  {
    n: '02',
    title: 'Адаптация',
    desc: 'Знакомство с продуктами, правилами, целевой аудиторией и процессом передачи клиента',
  },
  {
    n: '03',
    title: 'Обучение',
    desc: 'Скрипты, презентации, инструкции, кейсы и проверка знаний',
  },
  {
    n: '04',
    title: 'Работа с материалами',
    desc: 'Единая актуальная база предложений, контента и ответов на вопросы',
  },
  {
    n: '05',
    title: 'Передача лидов',
    desc: 'Фиксация источника, клиента, направления и ответственного специалиста',
  },
  {
    n: '06',
    title: 'Контроль сделки',
    desc: 'Статус клиента, этап переговоров и результат работы',
  },
  {
    n: '07',
    title: 'Вознаграждение и аналитика',
    desc: 'Расчёт выплат, активность агентов, переданные заявки и завершённые сделки',
  },
]

const ownerWidgets = [
  { label: 'Активные агенты', badge: 'Онлайн-статус', bar: 78, tone: 'accent' },
  { label: 'Кто передаёт клиентов', badge: 'Рейтинг по агентам', bar: 64, tone: 'neutral' },
  { label: 'Направления продаж', badge: 'Сравнение ниш', bar: 85, tone: 'accent' },
  { label: 'Зависшие сделки', badge: 'Требуют внимания', bar: 42, tone: 'warn' },
  { label: 'Обучение агентов', badge: 'Есть пробелы', bar: 55, tone: 'warn' },
  { label: 'Материалы в работе', badge: 'Актуальная база', bar: 70, tone: 'neutral' },
  {
    label: 'Вознаграждения к выплате',
    badge: 'Расчёт за период',
    bar: 90,
    tone: 'accent',
    wide: true,
  },
]

export default function AgentSystem() {
  return (
    <Slide number="08" className="agent-system">
      <div className="agent-system__status-row">
        <p className="agent-system__eyebrow">Агентская сеть</p>
        <span className="status-badge">Концепция под задачи бизнеса Владимира</span>
      </div>

      <h1 className="agent-system__title">Агентская система: от подключения до результата</h1>

      <p className="agent-system__subtitle">
        Единые материалы, обучение, передача клиентов, контроль активности и прозрачный расчёт
        вознаграждений
      </p>
      <p className="status-caption agent-system__status-caption">
        Финальная архитектура формируется после диагностики текущих процессов и используемых
        инструментов
      </p>

      <div className="agent-system__steps">
        {steps.map((step, index) => (
          <div className="agent-step" key={step.n}>
            <div className="agent-step__card">
              <span className="agent-step__number">{step.n}</span>
              <p className="agent-step__title">{step.title}</p>
              <p className="agent-step__desc">{step.desc}</p>
            </div>
            {index < steps.length - 1 && <span className="agent-step__arrow">→</span>}
          </div>
        ))}
      </div>

      <div className="agent-system__footer">
        <div className="agent-system__owner">
          <div className="agent-system__owner-bar">
            <span className="agent-system__owner-dot" />
            <span className="agent-system__owner-dot" />
            <span className="agent-system__owner-dot" />
            <span className="agent-system__owner-path">Панель собственника · Агентская сеть</span>
          </div>
          <div className="agent-system__owner-grid">
            {ownerWidgets.map((widget) => (
              <div
                className={`agent-widget agent-widget--${widget.tone} ${
                  widget.wide ? 'agent-widget--wide' : ''
                }`}
                key={widget.label}
              >
                <span className="agent-widget__badge">{widget.badge}</span>
                <p className="agent-widget__label">{widget.label}</p>
                <span className="agent-widget__track">
                  <span className="agent-widget__fill" style={{ width: `${widget.bar}%` }} />
                </span>
              </div>
            ))}
          </div>
          <p className="agent-system__owner-note">Показатели приведены как демонстрационный пример</p>
        </div>

        <div className="agent-system__pitch">
          <p className="agent-system__pitch-title">Почему это критично для роста агентской сети</p>
          <p className="agent-system__pitch-text">
            Сегодня рост сети упирается не в число агентов, а в контроль над ними: без единой
            системы часть клиентов теряется между «передал — забыл», активность агентов не видна,
            а вопрос «кому и сколько платить» решается вручную. Система убирает эту слепую зону —
            собственник управляет сетью по фактам, а не по словам агентов.
          </p>
        </div>
      </div>

      <div className="agent-system__recommendation">
        <span className="agent-system__recommendation-tag">Пример AI-рекомендации</span>
        <p className="agent-system__recommendation-text">
          «Три агента не проявляли активность более 14 дней. Рекомендуется отправить материалы для
          повторной активации и назначить короткий обучающий созвон»
        </p>
      </div>
    </Slide>
  )
}
