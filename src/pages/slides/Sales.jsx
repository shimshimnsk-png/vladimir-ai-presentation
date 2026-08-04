import { useState } from 'react'
import Slide from '../../components/Slide'
import './Sales.css'

const steps = [
  {
    key: 'lead',
    tab: '1. Обращение',
    title: 'Новое обращение',
    desc: 'Система фиксирует источник, направление бизнеса и контакт клиента',
  },
  {
    key: 'qualify',
    tab: '2. Квалификация',
    title: 'Квалификация',
    desc: 'Определяет нишу, задачу, потребность и готовность клиента к работе',
  },
  {
    key: 'offer',
    tab: '3. Предложение',
    title: 'Подготовка предложения',
    desc: 'Помогает сформировать персональное коммерческое предложение, скрипт разговора и материалы',
  },
  {
    key: 'deal',
    tab: '4. Сопровождение',
    title: 'Сопровождение сделки',
    desc: 'Напоминает о повторных контактах и показывает следующий шаг менеджеру',
  },
  {
    key: 'analytics',
    tab: '5. Аналитика',
    title: 'Аналитика',
    desc: 'Показывает этапы, на которых теряются клиенты, и основные причины отказов',
  },
]

const automationItems = [
  'Распределение заявок',
  'Подготовка к звонку',
  'Скрипты продаж',
  'Коммерческие предложения',
  'Сообщения после встречи',
  'Повторные касания',
  'Напоминания менеджерам',
  'Фиксация договорённостей',
  'Анализ причин отказов',
  'Отчётность для собственника',
]

function LeadMockup() {
  return (
    <div className="sales-mock sales-mock--lead">
      <div className="sales-mock__badge">
        <span className="sales-mock__badge-dot" />
        Новая заявка · только что
      </div>
      <div className="sales-mock__field">
        <span className="sales-mock__label">Источник</span>
        <span className="sales-mock__value">Telegram-бот</span>
      </div>
      <div className="sales-mock__field">
        <span className="sales-mock__label">Направление</span>
        <span className="sales-mock__value">Стоматология</span>
      </div>
      <div className="sales-mock__field">
        <span className="sales-mock__label">Контакт</span>
        <span className="sales-mock__value">Ирина К., +7 999 123-45-67</span>
      </div>
      <div className="sales-mock__note">
        Карточка автоматически создана в CRM, назначен ответственный менеджер
      </div>
    </div>
  )
}

function QualifyMockup() {
  return (
    <div className="sales-mock sales-mock--qualify">
      <div className="sales-mock__badge sales-mock__badge--muted">Карточка квалификации</div>
      <div className="sales-mock__field">
        <span className="sales-mock__label">Ниша</span>
        <span className="sales-mock__value">Стоматологическая клиника, 6 врачей</span>
      </div>
      <div className="sales-mock__field">
        <span className="sales-mock__label">Задача</span>
        <span className="sales-mock__value">Рост потока новых пациентов</span>
      </div>
      <div className="sales-mock__field">
        <span className="sales-mock__label">Потребность</span>
        <span className="sales-mock__value">Система привлечения и повторных обращений</span>
      </div>
      <div className="sales-mock__field">
        <span className="sales-mock__label">Готовность</span>
        <span className="sales-mock__tag">Готов обсуждать предложение</span>
      </div>
    </div>
  )
}

function OfferMockup() {
  return (
    <div className="sales-mock sales-mock--offer">
      <div className="sales-mock__doc">
        <p className="sales-mock__doc-title">Коммерческое предложение</p>
        <p className="sales-mock__doc-subtitle">Направление: стоматология</p>
        <ul className="sales-mock__doc-list">
          <li>Что входит в работу</li>
          <li>Этапы и сроки</li>
          <li>Следующий шаг для клиента</li>
        </ul>
      </div>
      <div className="sales-mock__script">
        <p className="sales-mock__script-title">Скрипт разговора</p>
        <p className="sales-mock__script-text">
          «Ирина, отправил предложение с учётом того, что мы обсудили — рост потока пациентов и
          повторные обращения. Удобно созвониться завтра, чтобы пройтись по деталям?»
        </p>
      </div>
    </div>
  )
}

function DealMockup() {
  return (
    <div className="sales-mock sales-mock--deal">
      <div className="sales-mock__reminder">
        <span className="sales-mock__reminder-label">Следующий контакт</span>
        <span className="sales-mock__reminder-date">через 2 дня</span>
      </div>
      <ul className="sales-mock__checklist">
        <li>Позвонить и уточнить решение по предложению</li>
        <li>Отправить кейс по похожей нише</li>
        <li>Зафиксировать итог разговора в карточке сделки</li>
      </ul>
      <div className="sales-mock__statuses">
        <span className="sales-mock__status">В работе</span>
        <span className="sales-mock__status">Ожидает ответ</span>
        <span className="sales-mock__status">Повторный контакт запланирован</span>
      </div>
    </div>
  )
}

function AnalyticsMockup() {
  const stages = ['Обращение', 'Квалификация', 'Предложение', 'Сделка']
  return (
    <div className="sales-mock sales-mock--analytics">
      <div className="sales-mock__funnel">
        {stages.map((stage, index) => (
          <div className="sales-mock__funnel-row" key={stage}>
            <span className="sales-mock__funnel-label">{stage}</span>
            <span
              className="sales-mock__funnel-bar"
              style={{ width: `${100 - index * 16}%` }}
            />
          </div>
        ))}
      </div>
      <div className="sales-mock__insight">
        Показывает этап с наибольшими потерями и помогает понять причину отказов
      </div>
    </div>
  )
}

const mockups = {
  lead: LeadMockup,
  qualify: QualifyMockup,
  offer: OfferMockup,
  deal: DealMockup,
  analytics: AnalyticsMockup,
}

export default function Sales() {
  const [activeKey, setActiveKey] = useState('lead')
  const active = steps.find((step) => step.key === activeKey)
  const ActiveMockup = mockups[activeKey]

  return (
    <Slide number="05" className="sales">
      <p className="sales__eyebrow">Продажи</p>

      <h1 className="sales__title">AI-система поддержки и контроля продаж</h1>

      <p className="sales__subtitle">
        Каждая заявка получает следующий шаг, а потенциальные клиенты не теряются после первого
        контакта
      </p>

      <div className="sales__tabs" role="tablist" aria-label="Этапы воронки">
        {steps.map((step) => (
          <button
            type="button"
            key={step.key}
            role="tab"
            aria-selected={step.key === activeKey}
            className={`sales__tab ${step.key === activeKey ? 'sales__tab--active' : ''}`}
            onClick={() => setActiveKey(step.key)}
          >
            {step.tab}
          </button>
        ))}
      </div>

      <div className="sales__stage">
        <div className="sales__stage-info">
          <p className="sales__stage-title">{active.title}</p>
          <p className="sales__stage-desc">{active.desc}</p>
        </div>
        <div className="sales__stage-window">
          <ActiveMockup />
        </div>
      </div>

      <div className="sales__compare">
        <div className="sales__compare-col sales__compare-col--before">
          <span className="sales__compare-title">Без AI-системы</span>
          <ul>
            <li>Заявка ждёт, пока менеджер найдёт время ответить</li>
            <li>КП и скрипт собираются заново под каждого клиента</li>
            <li>Клиент теряется после первого разговора</li>
            <li>Собственник видит только общий итог, без причины</li>
          </ul>
        </div>
        <span className="sales__compare-arrow">→</span>
        <div className="sales__compare-col sales__compare-col--after">
          <span className="sales__compare-title">С AI-системой</span>
          <ul>
            <li>Заявка сразу получает следующий шаг</li>
            <li>Материалы собираются по шаблону за минуты</li>
            <li>Система напоминает вернуть клиента в работу</li>
            <li>Видно, на каком этапе и почему теряются сделки</li>
          </ul>
        </div>
      </div>

      <div className="sales__footer">
        <div className="sales__automation">
          <span className="sales__automation-label">Что можно автоматизировать</span>
          <div className="sales__automation-chips">
            {automationItems.map((item) => (
              <span className="sales__chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="sales__recommendation">
          <span className="sales__recommendation-tag">Пример AI-рекомендации</span>
          <p className="sales__recommendation-text">
            «В 12 диалогах не было повторного контакта более семи дней. Рекомендуется вернуть
            клиентов в работу и подготовить персональные сообщения»
          </p>
        </div>
      </div>
    </Slide>
  )
}
