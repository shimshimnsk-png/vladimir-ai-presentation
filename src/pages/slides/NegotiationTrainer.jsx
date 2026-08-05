import { useState } from 'react'
import Slide from '../../components/Slide'
import './NegotiationTrainer.css'

const tabs = [
  { key: 'cabinet', tab: '1. Кабинет', title: 'Кабинет сотрудника', desc: 'Персональная рекомендация тренировки под слабое место и история прошлых попыток' },
  { key: 'brief', tab: '2. Сценарий', desc: 'Готовый бриф: роль клиента, категория объекта, сложность и цель переговоров', title: 'Новая тренировка' },
  { key: 'chat', tab: '3. Диалог', title: 'Тренировочный чат', desc: 'AI играет роль клиента и возражает — сотрудник отвечает текстом в формате ролевой игры' },
  { key: 'report', tab: '4. Отчёт', title: 'Разбор тренировки', desc: 'Оценка по 5 критериям, явные ошибки и готовые формулировки «как сказать лучше»' },
  { key: 'team', tab: '5. Команда', title: 'Панель руководителя', desc: 'Средний балл, зона риска и динамика по каждому сотруднику в одной таблице' },
]

const trainings = [
  { date: '31.05', name: 'Инвестор сравнивает с другим объектом', role: 'Инвесторы', score: '7.6', result: 'Успех', resultClass: 'success' },
  { date: '30.05', name: 'Возражение по цене от покупателя', role: 'Покупатели', score: '5.2', result: 'Отказ', resultClass: 'fail' },
  { date: '29.05', name: 'Арендатор торгуется по ставке', role: 'Аренда', score: '6.8', result: 'Частичный успех', resultClass: 'partial' },
]

function CabinetMock() {
  return (
    <div className="tn-mock tn-mock--cabinet">
      <div className="tn-mock__focus">
        <span className="tn-mock__eyebrow">Сегодняшний фокус</span>
        <p className="tn-mock__focus-title">Работа с возражениями по цене</p>
        <div className="tn-mock__focus-row">
          <div className="tn-mock__stat">
            <span className="tn-mock__stat-label">Средний балл</span>
            <span className="tn-mock__stat-value">7.1 <em>/ 10</em></span>
          </div>
          <div className="tn-mock__stat">
            <span className="tn-mock__stat-label">Слабая зона</span>
            <span className="tn-mock__stat-value tn-mock__stat-value--warn">6.5 <em>/ 10</em></span>
          </div>
          <div className="tn-mock__stat">
            <span className="tn-mock__stat-label">Рекомендованный сценарий</span>
            <span className="tn-mock__stat-value tn-mock__stat-value--accent">Инвестор давит по цене</span>
          </div>
        </div>
      </div>
      <div className="tn-mock__table">
        <div className="tn-mock__table-head">
          <span>Сценарий</span>
          <span>Канал</span>
          <span>Балл</span>
          <span>Результат</span>
        </div>
        {trainings.map((row) => (
          <div className="tn-mock__table-row" key={row.name}>
            <span className="tn-mock__table-name">{row.name}</span>
            <span className="tn-mock__table-role">{row.role}</span>
            <span className="tn-mock__table-score">{row.score}</span>
            <span className={`tn-mock__table-result tn-mock__table-result--${row.resultClass}`}>{row.result}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BriefMock() {
  return (
    <div className="tn-mock tn-mock--brief">
      <div className="tn-mock__brief-card">
        <span className="tn-mock__badge">Демо-сценарий</span>
        <p className="tn-mock__brief-title">Инвестор сравнивает с другим объектом</p>
        <div className="tn-mock__brief-grid">
          <div>
            <span className="tn-mock__label">Канал</span>
            <span className="tn-mock__value">Инвесторы</span>
          </div>
          <div>
            <span className="tn-mock__label">Клиент</span>
            <span className="tn-mock__value">Частный инвестор, ищет доходный объект</span>
          </div>
          <div>
            <span className="tn-mock__label">Категория</span>
            <span className="tn-mock__value">Апартаменты, курортная недвижимость</span>
          </div>
          <div>
            <span className="tn-mock__label">Сложность</span>
            <span className="tn-mock__value">Средний</span>
          </div>
          <div>
            <span className="tn-mock__label">Цель</span>
            <span className="tn-mock__value">Договориться о показе объекта на этой неделе</span>
          </div>
        </div>
        <p className="tn-mock__brief-note">
          Клиент уже смотрел похожий объект дешевле и сомневается в доходности. Держит паузу,
          сравнивает цифры вслух.
        </p>
      </div>
    </div>
  )
}

function ChatMock() {
  return (
    <div className="tn-mock tn-mock--chat">
      <div className="tn-mock__chat-bubble">
        <span className="tn-mock__chat-role">Клиент</span>
        <p>
          Я уже смотрел объект на соседней улице — на 15% дешевле. Почему я должен вкладываться
          именно в этот, если доходность там выглядит выше?
        </p>
      </div>
      <div className="tn-mock__chat-input">
        <span>Введите ответ сотрудника…</span>
        <span className="tn-mock__chat-send">Отправить</span>
      </div>
      <span className="tn-mock__chat-mode">Режим: ролевая игра · текст</span>
    </div>
  )
}

const criteria = [
  { label: 'Структурность переговоров', value: 76 },
  { label: 'Активное слушание', value: 74 },
  { label: 'Аргументация', value: 70 },
  { label: 'Работа с возражениями', value: 65 },
  { label: 'Презентация объекта', value: 68 },
]

function ReportMock() {
  return (
    <div className="tn-mock tn-mock--report">
      <div className="tn-mock__report-top">
        <div className="tn-mock__report-summary">
          <span className="tn-mock__label">Итог переговоров</span>
          <p className="tn-mock__value tn-mock__value--big">Клиент готов на показ при обсуждении рассрочки</p>
        </div>
        <div className="tn-mock__report-score">
          <span className="tn-mock__label">Общая оценка</span>
          <span className="tn-mock__report-score-value">7.1<em>/10</em></span>
        </div>
      </div>
      <div className="tn-mock__criteria">
        {criteria.map((c) => (
          <div className="tn-mock__criteria-row" key={c.label}>
            <span className="tn-mock__criteria-label">{c.label}</span>
            <span className="tn-mock__criteria-bar">
              <span className="tn-mock__criteria-fill" style={{ width: `${c.value}%` }} />
            </span>
            <span className="tn-mock__criteria-value">{(c.value / 10).toFixed(1)}</span>
          </div>
        ))}
      </div>
      <div className="tn-mock__report-note">
        <span className="tn-mock__report-note-tag">Как сказать лучше</span>
        <p>
          «Давайте сравним не цену за метр, а доходность за три года с учётом расположения —
          пришлю расчёт по обоим объектам».
        </p>
      </div>
    </div>
  )
}

const team = [
  { name: 'Анна Белова', role: 'Инвесторы, курортная недвижимость', trainings: 24, score: '7.1', risk: 'Возражения', trend: '+0.5' },
  { name: 'Дмитрий Орлов', role: 'Покупатели вторички', trainings: 18, score: '6.4', risk: 'Аргументация', trend: '+0.2' },
  { name: 'Мария Соколова', role: 'Аренда коммерции', trainings: 15, score: '7.8', risk: 'Закрытие', trend: '+0.8' },
]

function TeamMock() {
  return (
    <div className="tn-mock tn-mock--team">
      <div className="tn-mock__team-stats">
        <div className="tn-mock__stat">
          <span className="tn-mock__stat-label">Сотрудников</span>
          <span className="tn-mock__stat-value">12</span>
        </div>
        <div className="tn-mock__stat">
          <span className="tn-mock__stat-label">Тренировок</span>
          <span className="tn-mock__stat-value">68</span>
        </div>
        <div className="tn-mock__stat">
          <span className="tn-mock__stat-label">Средний балл</span>
          <span className="tn-mock__stat-value">6.9</span>
        </div>
        <div className="tn-mock__stat">
          <span className="tn-mock__stat-label">Риск команды</span>
          <span className="tn-mock__stat-value tn-mock__stat-value--warn">Работа с возражениями</span>
        </div>
      </div>
      <div className="tn-mock__team-table">
        <div className="tn-mock__team-head">
          <span>Сотрудник</span>
          <span>Тренировок</span>
          <span>Балл</span>
          <span>Зона риска</span>
          <span>Динамика</span>
        </div>
        {team.map((row) => (
          <div className="tn-mock__team-row" key={row.name}>
            <div className="tn-mock__team-name">
              <span>{row.name}</span>
              <span className="tn-mock__team-role">{row.role}</span>
            </div>
            <span>{row.trainings}</span>
            <span className="tn-mock__team-score">{row.score}</span>
            <span>{row.risk}</span>
            <span className="tn-mock__team-trend">{row.trend}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const mockups = {
  cabinet: CabinetMock,
  brief: BriefMock,
  chat: ChatMock,
  report: ReportMock,
  team: TeamMock,
}

export default function NegotiationTrainer() {
  const [activeKey, setActiveKey] = useState('cabinet')
  const active = tabs.find((tab) => tab.key === activeKey)
  const ActiveMockup = mockups[activeKey]

  return (
    <Slide number="09" className="negotiation-trainer">
      <div className="nt__status-row">
        <p className="nt__eyebrow">Агентская система</p>
        <span className="status-badge">Референс — такая архитектура уже работает на рынке</span>
      </div>

      <div className="nt__footer nt__footer--top">
        <span className="nt__footer-label">Что переносится в бизнесы Владимира</span>
        <div className="nt__footer-chips">
          <span className="nt__chip">Обучение новых сотрудников без наставника</span>
          <span className="nt__chip">Отработка сложных возражений франшизы</span>
          <span className="nt__chip">Контроль качества переговоров по клиникам</span>
          <span className="nt__chip">Единый стандарт продаж на все направления</span>
        </div>
      </div>

      <h1 className="nt__title">Тренажёр переговоров для агентов и консультантов по недвижимости</h1>

      <p className="nt__subtitle">
        Сотрудник отрабатывает сложный разговор с клиентом до реальной сделки — AI играет роль
        клиента, спорит и возражает, а после даёт разбор по критериям
      </p>
      <p className="status-caption nt__status-caption">
        Механика проверена работающим на рынке решением, экраны адаптированы под недвижимость и
        консалтинг
      </p>
      <p className="nt__niches">
        Роли клиентов: покупатель вторички · инвестор · арендатор коммерции · партнёр-застройщик
      </p>

      <div className="nt__tabs" role="tablist" aria-label="Шаги тренажёра">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.key}
            role="tab"
            aria-selected={tab.key === activeKey}
            className={`nt__tab ${tab.key === activeKey ? 'nt__tab--active' : ''}`}
            onClick={() => setActiveKey(tab.key)}
          >
            {tab.tab}
          </button>
        ))}
      </div>

      <div className="nt__stage">
        <div className="nt__stage-info">
          <p className="nt__stage-title">{active.title}</p>
          <p className="nt__stage-desc">{active.desc}</p>
        </div>
        <div className="nt__stage-window">
          <ActiveMockup />
        </div>
      </div>

    </Slide>
  )
}
