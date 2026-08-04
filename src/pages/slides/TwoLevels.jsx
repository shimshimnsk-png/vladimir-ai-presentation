import Slide from '../../components/Slide'
import './TwoLevels.css'

const columns = [
  {
    tag: 'Уровень 1',
    title: 'Личный AI-помощник',
    subtitle: 'Работает внутри Telegram и помогает предпринимателю лично',
    rows: [
      { label: 'Интерфейс', value: 'Telegram' },
      { label: 'Пользователь', value: 'Собственник или предприниматель' },
      { label: 'Принцип работы', value: 'Получает поручение и выполняет его' },
    ],
    tasksLabel: 'Основные задачи',
    tasks: [
      'Анализ информации',
      'Тексты и контент',
      'Документы',
      'Поиск и рекомендации',
      'Задачи и напоминания',
      'Помощь в ежедневной работе',
    ],
    result: 'Экономия времени собственника и более быстрое выполнение задач',
  },
  {
    tag: 'Уровень 2',
    title: 'Комплексная система автоматизации бизнеса',
    subtitle: 'Объединяет процессы компании и помогает управлять командой',
    rows: [
      { label: 'Интерфейс', value: 'Внутренняя система с дашбордом' },
      { label: 'Пользователи', value: 'Собственник, менеджеры, сотрудники и агенты' },
      { label: 'Принцип работы', value: 'Собирает данные, связывает процессы и показывает следующие действия' },
    ],
    tasksLabel: 'Основные задачи',
    tasks: [
      'Маркетинг',
      'Контент',
      'Продажи',
      'Работа с агентами',
      'Задачи команды',
      'Финансы и аналитика',
    ],
    result: 'Управляемость процессов, контроль заявок и возможность масштабирования',
  },
]

export default function TwoLevels() {
  return (
    <Slide number="12" className="two-levels">
      <div className="two-levels__status-row">
        <span className="status-badge">Сравнение форматов AI-решений</span>
      </div>
      <h1 className="two-levels__title">Два уровня использования AI в бизнесе</h1>

      <div className="two-levels__columns">
        {columns.map((column) => (
          <div className="two-levels-column" key={column.tag}>
            <span className="two-levels-column__tag">{column.tag}</span>
            <p className="two-levels-column__title">{column.title}</p>
            <p className="two-levels-column__subtitle">{column.subtitle}</p>

            <div className="two-levels-column__rows">
              {column.rows.map((row) => (
                <div className="two-levels-column__row" key={row.label}>
                  <span className="two-levels-column__row-label">{row.label}</span>
                  <span className="two-levels-column__row-value">{row.value}</span>
                </div>
              ))}
            </div>

            <span className="two-levels-column__tasks-label">{column.tasksLabel}</span>
            <ul className="two-levels-column__tasks">
              {column.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>

            <div className="two-levels-column__result">
              <span className="two-levels-column__result-label">Результат</span>
              <p>{column.result}</p>
            </div>
          </div>
        ))}

        <div className="two-levels__divider" />
      </div>

      <div className="two-levels__conclusion">
        <p>
          Это не конкурирующие решения: личный AI-помощник ускоряет ежедневную работу
          предпринимателя, а комплексная система связывает и контролирует процессы компании.
        </p>
      </div>

      <p className="two-levels__note">
        Собственная расширенная AI-система находится в разработке. Её отдельные возможности могут
        подключаться постепенно, по мере роста задач бизнеса.
      </p>
    </Slide>
  )
}
