import Slide from '../../components/Slide'
import './Ecosystem.css'

const modules = [
  {
    tag: '05',
    title: 'AI-помощник',
    desc: 'Личный AI-помощник в Telegram, который знает всё, что происходит в бизнесе',
  },
  {
    tag: '06',
    title: 'Маркетинг и контент',
    desc: 'Единый контент-план и материалы под каждую нишу',
  },
  {
    tag: '07',
    title: 'Продажи',
    desc: 'Заявки, скрипты и сопровождение сделок без потерь на каждом этапе',
  },
  {
    tag: '08',
    title: 'Агентская сеть',
    desc: 'Материалы, обучение, передача лидов и контроль вознаграждений',
  },
]

const dataChips = [
  'Клиенты и сделки',
  'Материалы и контент',
  'История переписки',
  'Статусы и этапы',
  'Активность агентов',
  'Вознаграждения',
]

const benefits = [
  'Ни один лид не теряется между этапами и людьми',
  'AI-помощник отвечает, опираясь на данные всей системы, а не одного модуля',
  'Собственник смотрит в один экран вместо четырёх разрозненных инструментов',
  'Новый модуль подключается к общей базе, а не строится с нуля',
]

export default function Ecosystem() {
  return (
    <Slide number="09" className="ecosystem">
      <div className="ecosystem__status-row">
        <p className="ecosystem__eyebrow">Единая система</p>
        <span className="status-badge">Концепция под задачи бизнеса Владимира Заморенова</span>
      </div>

      <h1 className="ecosystem__title">Не четыре инструмента — одна система вокруг бизнеса</h1>

      <p className="ecosystem__subtitle">
        AI-помощник, маркетинг и контент, продажи и агентская сеть работают на общих данных и
        передают друг другу результат
      </p>
      <p className="status-caption ecosystem__status-caption">
        Финальная архитектура формируется после диагностики текущих процессов и используемых
        инструментов
      </p>

      <div className="ecosystem__modules">
        {modules.map((module) => (
          <div className="ecosystem-module" key={module.tag}>
            <span className="ecosystem-module__tag">Слайд {module.tag}</span>
            <p className="ecosystem-module__title">{module.title}</p>
            <p className="ecosystem-module__desc">{module.desc}</p>
            <span className="ecosystem-module__link" />
          </div>
        ))}
      </div>

      <div className="ecosystem__hub">
        <span className="ecosystem__hub-label">Единая база данных и правил</span>
        <div className="ecosystem__hub-chips">
          {dataChips.map((chip) => (
            <span className="ecosystem__chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="ecosystem__footer">
        <div className="ecosystem__benefits">
          {benefits.map((benefit) => (
            <div className="ecosystem__benefit" key={benefit}>
              <span className="ecosystem__benefit-mark" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>

        <div className="ecosystem__closing">
          <span className="ecosystem__closing-tag">Главный вывод</span>
          <p>
            Каждый модуль можно запустить отдельно. Настоящий эффект — когда они работают как одна
            система
          </p>
        </div>
      </div>
    </Slide>
  )
}
