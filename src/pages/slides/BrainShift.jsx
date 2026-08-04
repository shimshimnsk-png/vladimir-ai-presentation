import Slide from '../../components/Slide'
import './BrainShift.css'

const before = [
  'Данные находятся в разных сервисах',
  'Собственник сам собирает отчёты',
  'Заявки теряются без повторных касаний',
  'Решения принимаются с опозданием',
  'Знания зависят от отдельных сотрудников',
  'Отделы работают разрозненно',
  'Рост компании увеличивает хаос и ручной контроль',
]

const after = [
  'Единое пространство данных и знаний',
  'Приоритеты и отклонения видны сразу',
  'Каждая заявка получает следующий шаг',
  'Собственник быстрее принимает решения',
  'Процессы и стандарты сохраняются в системе',
  'Маркетинг, продажи, контент и финансы связаны',
  'Масштабирование становится более управляемым',
]

export default function BrainShift() {
  return (
    <Slide number="10" className="brain-shift">
      <p className="brain-shift__eyebrow">Результат для бизнеса</p>
      <h1 className="brain-shift__title">Что меняется для бизнеса с BRAIN</h1>

      <div className="brain-shift__body">
        <div className="brain-shift__columns">
          <div className="brain-shift-column brain-shift-column--before">
            <span className="brain-shift-column__tag">До BRAIN</span>
            <div className="brain-shift-column__list">
              {before.map((item) => (
                <div className="brain-shift-item" key={item}>
                  <span className="brain-shift-item__mark brain-shift-item__mark--before" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="brain-shift-column brain-shift-column--after">
            <span className="brain-shift-column__tag brain-shift-column__tag--accent">
              После внедрения BRAIN
            </span>
            <div className="brain-shift-column__list">
              {after.map((item) => (
                <div className="brain-shift-item" key={item}>
                  <span className="brain-shift-item__mark brain-shift-item__mark--after" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="brain-shift__conclusion">
          <p>
            Обычный AI экономит время на отдельных задачах. BRAIN помогает выстроить систему, в
            которой весь бизнес работает согласованно и движется к общим целям.
          </p>
          <p>
            Собственник получает не ещё один сервис, который нужно постоянно контролировать, а
            единый центр анализа, приоритетов и принятия решений.
          </p>
        </div>
      </div>

      <p className="brain-shift__note">
        BRAIN — концепция собственной AI-системы управления и развития бизнеса. Разрабатывается
        поэтапно, под задачи вашего бизнеса.
      </p>
    </Slide>
  )
}
