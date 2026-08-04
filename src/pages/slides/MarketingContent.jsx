import { useState } from 'react'
import Slide from '../../components/Slide'
import './MarketingContent.css'

const marketingItems = [
  'Сегментация предпринимателей по нишам',
  'Отдельное позиционирование под каждое направление',
  'Анализ рынка и конкурентов',
  'Разработка офферов',
  'Подготовка маркетинговых гипотез',
  'Планирование рекламных активностей',
  'Анализ источников обращений',
  'Определение наиболее перспективных направлений',
]

const contentItems = [
  'Единый контент-план',
  'Экспертные посты и статьи',
  'Сценарии видео',
  'Презентации и коммерческие материалы',
  'Кейсы',
  'Email- и Telegram-рассылки',
  'Адаптация одного материала под разные площадки',
  'Отдельный контент под госзаказ, недвижимость, франшизы и стоматологию',
]

const chainSteps = [
  'Экспертиза компании',
  'AI-обработка',
  'Контент под каждую нишу',
  'Публикация',
  'Заявки',
  'Аналитика',
]

const directions = [
  {
    key: 'gov',
    label: 'Госзаказ',
    format: 'Экспертный пост · Telegram-канал',
    title: 'Как избежать типичных ошибок при участии в конкурсных процедурах',
  },
  {
    key: 'franchise',
    label: 'Франшизы',
    format: 'Гайд · Email-рассылка',
    title: 'На что обратить внимание перед покупкой франшизы',
  },
  {
    key: 'realty',
    label: 'Недвижимость',
    format: 'Аналитика · Блог',
    title: 'Что важно учитывать при выборе коммерческого объекта',
  },
  {
    key: 'dental',
    label: 'Стоматология',
    format: 'Кейс · Telegram-канал',
    title: 'Как выстроить понятный путь пациента в клинике',
  },
]

export default function MarketingContent() {
  const [activeKey, setActiveKey] = useState('gov')
  const active = directions.find((direction) => direction.key === activeKey)

  return (
    <Slide number="06" className="marketing-content">
      <div className="marketing-content__status-row">
        <p className="marketing-content__eyebrow">Маркетинг и контент</p>
        <span className="status-badge">Концепция под задачи бизнеса Владимира Заморенова</span>
      </div>

      <h1 className="marketing-content__title">AI-система маркетинга и контента</h1>

      <p className="marketing-content__subtitle">
        От разрозненных публикаций к единой системе привлечения предпринимателей из разных ниш
      </p>
      <p className="status-caption marketing-content__status-caption">
        Финальная архитектура формируется после диагностики текущих процессов и используемых
        инструментов
      </p>

      <div className="marketing-content__columns">
        <div className="marketing-content__column">
          <p className="marketing-content__column-title">Маркетинг</p>
          <ul className="marketing-content__list">
            {marketingItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="marketing-content__column">
          <p className="marketing-content__column-title">Контент</p>
          <ul className="marketing-content__list">
            {contentItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="marketing-content__chain">
        {chainSteps.map((step, index) => (
          <span className="marketing-content__chain-item" key={step}>
            <span className="marketing-content__chain-label">{step}</span>
            {index < chainSteps.length - 1 && (
              <span className="marketing-content__chain-arrow">→</span>
            )}
          </span>
        ))}
      </div>

      <div className="marketing-content__footer">
        <div className="marketing-content__demo">
          <div className="marketing-content__tabs">
            {directions.map((direction) => (
              <button
                type="button"
                key={direction.key}
                className={`marketing-content__tab ${
                  direction.key === activeKey ? 'marketing-content__tab--active' : ''
                }`}
                onClick={() => setActiveKey(direction.key)}
              >
                {direction.label}
              </button>
            ))}
          </div>

          <div className="marketing-content__window">
            <div className="marketing-content__window-bar">
              <span className="marketing-content__window-dot" />
              <span className="marketing-content__window-dot" />
              <span className="marketing-content__window-dot" />
              <span className="marketing-content__window-path">
                AI-контент · направление «{active.label}»
              </span>
            </div>
            <div className="marketing-content__window-body">
              <span className="marketing-content__window-format">{active.format}</span>
              <p className="marketing-content__window-title">{active.title}</p>
            </div>
          </div>
        </div>

        <p className="marketing-content__note">
          Для каждого направления формируются отдельные предложения, материалы и воронки — без
          смешивания разных аудиторий
        </p>
      </div>
    </Slide>
  )
}
