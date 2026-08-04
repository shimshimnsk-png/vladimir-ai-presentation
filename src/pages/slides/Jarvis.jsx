import { useState } from 'react'
import Slide from '../../components/Slide'
import './Jarvis.css'

const scenarios = [
  {
    key: 'marketing',
    tab: 'Маркетинг',
    status: 'разбор направлений',
    user: {
      time: '11:02',
      text: 'Проанализируй наши направления: госзаказ, франшизы, недвижимость и стоматология. На каком направлении лучше сосредоточить продвижение в этом месяце?',
    },
    jarvis: {
      time: '11:03',
      blocks: [
        {
          type: 'text',
          value:
            'Для точного вывода мне понадобятся данные по количеству обращений, среднему чеку, сроку сделки и конверсии по каждому направлению.',
        },
        { type: 'text', value: 'Предварительно предлагаю сравнить направления по четырём показателям:' },
        {
          type: 'list',
          items: [
            'потенциальная ёмкость рынка',
            'скорость принятия решения клиентом',
            'стоимость привлечения',
            'прибыльность сделки',
          ],
        },
        {
          type: 'text',
          value: 'Я могу подготовить таблицу для анализа и список данных, которые необходимо собрать.',
        },
      ],
    },
  },
  {
    key: 'content',
    tab: 'Контент',
    status: 'контент-план',
    user: {
      time: '09:41',
      text: 'Составь контент-план на неделю для привлечения предпринимателей в консалтинг по госзаказу.',
    },
    jarvis: {
      time: '09:42',
      blocks: [
        { type: 'text', value: 'Подготовил основные темы:' },
        {
          type: 'list',
          items: [
            'ошибки предпринимателей при работе с госзаказом',
            'разбор сценария участия в закупке',
            'кому подходит это направление',
            'ответы на частые возражения',
            'экспертный кейс',
            'чек-лист подготовки компании',
            'приглашение на диагностическую консультацию',
          ],
        },
        { type: 'text', value: 'Подготовить тексты для Telegram и сценарии коротких видео?' },
      ],
    },
  },
  {
    key: 'sales',
    tab: 'Продажи',
    status: 'повторный контакт',
    user: {
      time: '15:18',
      text: 'Клиент из стоматологии заинтересовался консалтингом, но после встречи перестал отвечать. Подготовь повторное сообщение.',
    },
    jarvis: {
      time: '15:19',
      blocks: [
        {
          type: 'text',
          value:
            'Алексей, здравствуйте. Возвращаюсь к нашему разговору по развитию стоматологической клиники. На встрече мы определили несколько точек роста: загрузка врачей, работа с текущей базой пациентов и повторные продажи.',
        },
        {
          type: 'text',
          value:
            'Подскажите, вопрос ещё актуален? При необходимости я кратко подготовлю возможный план первых действий.',
        },
        { type: 'text', value: 'Подготовить ещё два варианта сообщения?' },
      ],
    },
  },
  {
    key: 'agents',
    tab: 'Агенты',
    status: 'обучение агента',
    user: {
      time: '17:05',
      text: 'Подготовь структуру обучения нового агента, который будет привлекать клиентов из сферы недвижимости.',
    },
    jarvis: {
      time: '17:06',
      blocks: [
        { type: 'text', value: 'Предлагаю пять блоков адаптации:' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Продукт и услуги компании',
            'Целевая аудитория',
            'Вопросы для выявления потребности',
            'Правила передачи клиента',
            'Контроль сделки и вознаграждение',
          ],
        },
        {
          type: 'text',
          value: 'Я могу подготовить инструкцию агента, скрипт первого контакта и тест для проверки знаний.',
        },
      ],
    },
  },
]

const functions = [
  'Анализ рынка и конкурентов',
  'Позиционирование и упаковка продукта',
  'Посты, офферы и скрипты продаж',
  'Контент-планы',
  'Автоматизация процессов',
  'Задачи, идеи и напоминания',
  'Фото, скриншоты и PDF',
  'Голосовые сообщения',
  'Память контекста диалога',
  'Работает 24/7 в Telegram',
]

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path
        d="M14.5 3.5 20 9l-3 2-1.5 5-2-2-4 4-1-1 4-4-2-2 5-1.5 2-3Z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M9 15 4 20" strokeLinecap="round" />
    </svg>
  )
}

function HeaderIcons() {
  return (
    <div className="jarvis-chat__icons">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path
          d="M15 10.5V8.2a1.2 1.2 0 0 0-1.2-1.2H4.2A1.2 1.2 0 0 0 3 8.2v7.6A1.2 1.2 0 0 0 4.2 17h9.6a1.2 1.2 0 0 0 1.2-1.2v-2.3l4 2.6V7.9l-4 2.6Z"
          strokeLinejoin="round"
        />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path
          d="M6.6 3.5c.5 0 1 .3 1.2.8l1 2.4c.2.5.1 1-.2 1.4L7.5 9.6c.9 2 2.5 3.6 4.5 4.5l1.5-1.1c.4-.3.9-.4 1.4-.2l2.4 1c.5.2.8.7.8 1.2v2c0 .9-.8 1.6-1.7 1.5C10.2 17.9 6.1 13.8 5.5 7.6c-.1-.9.6-1.7 1.5-1.7Z"
          strokeLinejoin="round"
        />
      </svg>
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="6" r="1.4" />
        <circle cx="12" cy="12" r="1.4" />
        <circle cx="12" cy="18" r="1.4" />
      </svg>
    </div>
  )
}

function InputBar() {
  return (
    <div className="jarvis-chat__inputbar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path
          d="M16.5 8.5 10 15a2.5 2.5 0 1 1-3.5-3.5l7-7a3.5 3.5 0 1 1 5 5l-7 7a1 1 0 0 1-1.4-1.4l6.5-6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="jarvis-chat__inputbar-placeholder">Сообщение</span>
      <span className="jarvis-chat__inputbar-mic">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M6 11a6 6 0 0 0 12 0M12 17v3" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  )
}

function MessageBlocks({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === 'list') {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag className="jarvis-chat__list" key={index}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Tag>
      )
    }
    return <p key={index}>{block.value}</p>
  })
}

export default function Jarvis() {
  const [activeKey, setActiveKey] = useState('marketing')
  const active = scenarios.find((scenario) => scenario.key === activeKey)
  const previews = scenarios.filter((scenario) => scenario.key !== activeKey)

  return (
    <Slide number="03" className="jarvis">
      <h1 className="jarvis__title">Джарвис — личный AI-помощник в Telegram</h1>
      <p className="jarvis__subtitle">
        Предприниматель ставит задачи текстом или голосом и получает результат в привычном
        мессенджере
      </p>
      <p className="jarvis__niches">
        Настроен под ваши направления: госзаказ · франшизы · недвижимость · стоматология
      </p>

      <div className="jarvis__control-row">
        <span className="jarvis__demo-tag">Демонстрационные сценарии работы AI-помощника</span>

        <div className="jarvis__tabs" role="tablist" aria-label="Сценарии переписки">
          {scenarios.map((scenario) => (
            <button
              type="button"
              key={scenario.key}
              role="tab"
              aria-selected={scenario.key === activeKey}
              className={`jarvis__tab ${scenario.key === activeKey ? 'jarvis__tab--active' : ''}`}
              onClick={() => setActiveKey(scenario.key)}
            >
              {scenario.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="jarvis__body">
        <div className="jarvis-chat jarvis-chat--main">
          <div className="jarvis-chat__header">
            <span className="jarvis-chat__avatar">Д</span>
            <div className="jarvis-chat__heading">
              <span className="jarvis-chat__name">Джарвис</span>
              <span className="jarvis-chat__status">
                <span className="jarvis-chat__dot" />
                AI-помощник · {active.status}
              </span>
            </div>
            <HeaderIcons />
          </div>

          <div className="jarvis-chat__messages">
            <div className="jarvis-chat__row jarvis-chat__row--user">
              <div className="jarvis-chat__bubble jarvis-chat__bubble--user">
                <p>{active.user.text}</p>
                <span className="jarvis-chat__time">
                  {active.user.time} <span className="jarvis-chat__ticks">✓✓</span>
                </span>
              </div>
            </div>

            <div className="jarvis-chat__row jarvis-chat__row--jarvis">
              <div className="jarvis-chat__bubble jarvis-chat__bubble--jarvis">
                <MessageBlocks blocks={active.jarvis.blocks} />
                <span className="jarvis-chat__time">{active.jarvis.time}</span>
              </div>
            </div>
          </div>

          <InputBar />
        </div>

        <div className="jarvis__previews">
          {previews.map((scenario) => (
            <button
              type="button"
              key={scenario.key}
              className="jarvis-chat jarvis-chat--preview"
              onClick={() => setActiveKey(scenario.key)}
            >
              <div className="jarvis-chat__header">
                <span className="jarvis-chat__avatar jarvis-chat__avatar--sm">Д</span>
                <div className="jarvis-chat__heading">
                  <span className="jarvis-chat__name">{scenario.tab}</span>
                  <span className="jarvis-chat__status">
                    <span className="jarvis-chat__dot" />
                    {scenario.status}
                  </span>
                </div>
                <span className="jarvis-chat__hint">Открыть ↗</span>
              </div>

              <div className="jarvis-chat__messages jarvis-chat__messages--preview">
                <div className="jarvis-chat__row jarvis-chat__row--user">
                  <div className="jarvis-chat__bubble jarvis-chat__bubble--user">
                    <p>{scenario.user.text}</p>
                  </div>
                </div>
                <div className="jarvis-chat__row jarvis-chat__row--jarvis">
                  <div className="jarvis-chat__bubble jarvis-chat__bubble--jarvis">
                    <MessageBlocks blocks={scenario.jarvis.blocks.slice(0, 1)} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="jarvis__pinned">
        <span className="jarvis__pinned-label">
          <PinIcon />
          Закреплённое сообщение
        </span>
        <div className="jarvis__pinned-row">
          <span className="jarvis-chat__avatar jarvis-chat__avatar--sm">Д</span>
          <div className="jarvis__pinned-bubble">
            <p>Коротко — вот что я умею:</p>
            <div className="jarvis-chat__tags">
              {functions.map((item) => (
                <span className="jarvis-chat__tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
