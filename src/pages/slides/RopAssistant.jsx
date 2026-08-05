import { useState } from 'react'
import Slide from '../../components/Slide'
import './RopAssistant.css'

const tabs = [
  { key: 'knowledge', tab: '1. База знаний', title: 'База знаний компании', desc: 'Скрипты, регламенты и стандарты продаж — контекст, с которым сверяется каждая встреча' },
  { key: 'upload', tab: '2. Загрузка встречи', title: 'Загрузка встречи', desc: 'Видео до 1,5 ГБ, ссылка на запись или готовая транскрипция — плюс роль менеджера и длительность звонка' },
  { key: 'report', tab: '3. Отчёт', title: 'Отчёт по встрече', desc: 'Оценка по этапам продаж, сильные и слабые стороны, что помешало закрыть сделку' },
  { key: 'team', tab: '4. Команда', title: 'Дашборд команды', desc: 'Средний балл по каждому менеджеру, тренд динамики, фильтр по датам' },
]

const documents = [
  { name: 'Скрипт холодного звонка.pdf', tag: 'Скрипт' },
  { name: 'Регламент работы с возражениями.docx', tag: 'Регламент' },
  { name: 'Стандарт презентации франшизы.pdf', tag: 'Стандарт' },
]

function KnowledgeMock() {
  return (
    <div className="ra-mock ra-mock--knowledge">
      <div className="ra-mock__brief-card">
        <span className="ra-mock__badge">Учтено в анализе</span>
        <p className="ra-mock__brief-title">Материалы компании</p>
        <div className="ra-mock__docs">
          {documents.map((doc) => (
            <div className="ra-mock__doc" key={doc.name}>
              <span className="ra-mock__doc-tag">{doc.tag}</span>
              <span className="ra-mock__doc-name">{doc.name}</span>
              <span className="ra-mock__doc-status">Загружено</span>
            </div>
          ))}
        </div>
        <p className="ra-mock__brief-note">
          Каждая встреча сверяется с этими документами — отчёт учитывает принятые в компании
          формулировки и этапы продаж, а не общие шаблоны.
        </p>
      </div>
    </div>
  )
}

function UploadMock() {
  return (
    <div className="ra-mock ra-mock--upload">
      <div className="ra-mock__upload-options">
        <div className="ra-mock__upload-option ra-mock__upload-option--active">
          <span className="ra-mock__label">Файл</span>
          <span className="ra-mock__value">Видео встречи, до 1,5 ГБ</span>
        </div>
        <div className="ra-mock__upload-option">
          <span className="ra-mock__label">Ссылка</span>
          <span className="ra-mock__value">Запись звонка или видеоконференции</span>
        </div>
        <div className="ra-mock__upload-option">
          <span className="ra-mock__label">Транскрипция</span>
          <span className="ra-mock__value">Готовый текст встречи</span>
        </div>
      </div>
      <div className="ra-mock__brief-card">
        <div className="ra-mock__brief-grid">
          <div>
            <span className="ra-mock__label">Роль менеджера</span>
            <span className="ra-mock__value">Менеджер по продаже франшизы</span>
          </div>
          <div>
            <span className="ra-mock__label">ID сотрудника</span>
            <span className="ra-mock__value">M-014</span>
          </div>
          <div>
            <span className="ra-mock__label">Длительность встречи</span>
            <span className="ra-mock__value">38 минут</span>
          </div>
          <div>
            <span className="ra-mock__label">Статус</span>
            <span className="ra-mock__value">Готово к анализу</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const criteria = [
  { label: 'Установление контакта', value: 82 },
  { label: 'Выявление потребности', value: 71 },
  { label: 'Презентация решения', value: 74 },
  { label: 'Работа с возражениями', value: 63 },
  { label: 'Закрытие сделки', value: 58 },
]

function ReportMock() {
  return (
    <div className="ra-mock ra-mock--report">
      <div className="ra-mock__report-top">
        <div className="ra-mock__report-summary">
          <span className="ra-mock__label">Итог встречи</span>
          <p className="ra-mock__value ra-mock__value--big">Клиент просит расчёт по франшизе, решение через неделю</p>
        </div>
        <div className="ra-mock__report-score">
          <span className="ra-mock__label">Общая оценка</span>
          <span className="ra-mock__report-score-value">7.3<em>/10</em></span>
        </div>
      </div>
      <div className="ra-mock__criteria">
        {criteria.map((c) => (
          <div className="ra-mock__criteria-row" key={c.label}>
            <span className="ra-mock__criteria-label">{c.label}</span>
            <span className="ra-mock__criteria-bar">
              <span className="ra-mock__criteria-fill" style={{ width: `${c.value}%` }} />
            </span>
            <span className="ra-mock__criteria-value">{(c.value / 10).toFixed(1)}</span>
          </div>
        ))}
      </div>
      <div className="ra-mock__report-note">
        <span className="ra-mock__report-note-tag">Приоритетное действие</span>
        <p>
          Прислать клиенту расчёт доходности франшизы до конца недели — на встрече он дважды
          возвращался к вопросу окупаемости.
        </p>
      </div>
    </div>
  )
}

const team = [
  { name: 'Анна Белова', role: 'Продажи франшизы', trainings: 24, score: '7.1', risk: 'Закрытие сделки', trend: '+0.5' },
  { name: 'Дмитрий Орлов', role: 'Госзаказ и тендеры', trainings: 18, score: '6.4', risk: 'Возражения', trend: '+0.2' },
  { name: 'Мария Соколова', role: 'Стоматология, консультации', trainings: 15, score: '7.8', risk: 'Выявление потребности', trend: '+0.8' },
]

function TeamMock() {
  return (
    <div className="ra-mock ra-mock--team">
      <div className="ra-mock__team-stats">
        <div className="ra-mock__stat">
          <span className="ra-mock__stat-label">Сотрудников</span>
          <span className="ra-mock__stat-value">12</span>
        </div>
        <div className="ra-mock__stat">
          <span className="ra-mock__stat-label">Встреч проанализировано</span>
          <span className="ra-mock__stat-value">68</span>
        </div>
        <div className="ra-mock__stat">
          <span className="ra-mock__stat-label">Средний балл</span>
          <span className="ra-mock__stat-value">6.9</span>
        </div>
        <div className="ra-mock__stat">
          <span className="ra-mock__stat-label">Риск команды</span>
          <span className="ra-mock__stat-value ra-mock__stat-value--warn">Закрытие сделки</span>
        </div>
      </div>
      <div className="ra-mock__team-table">
        <div className="ra-mock__team-head">
          <span>Сотрудник</span>
          <span>Встреч</span>
          <span>Балл</span>
          <span>Зона риска</span>
          <span>Динамика</span>
        </div>
        {team.map((row) => (
          <div className="ra-mock__team-row" key={row.name}>
            <div className="ra-mock__team-name">
              <span>{row.name}</span>
              <span className="ra-mock__team-role">{row.role}</span>
            </div>
            <span>{row.trainings}</span>
            <span className="ra-mock__team-score">{row.score}</span>
            <span>{row.risk}</span>
            <span className="ra-mock__team-trend">{row.trend}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const mockups = {
  knowledge: KnowledgeMock,
  upload: UploadMock,
  report: ReportMock,
  team: TeamMock,
}

export default function RopAssistant() {
  const [activeKey, setActiveKey] = useState('knowledge')
  const active = tabs.find((tab) => tab.key === activeKey)
  const ActiveMockup = mockups[activeKey]

  return (
    <Slide number="08" className="rop-assistant">
      <div className="ra__status-row">
        <p className="ra__eyebrow">Автоматизация продаж</p>
        <span className="status-badge">Реализовано — рабочий продукт, не референс</span>
      </div>

      <div className="ra__footer ra__footer--top">
        <span className="ra__footer-label">Что переносится в бизнесы Владимира</span>
        <div className="ra__footer-chips">
          <span className="ra__chip">Контроль качества переговоров по франшизам</span>
          <span className="ra__chip">Оценка звонков в госзаказе и тендерах</span>
          <span className="ra__chip">Единый стандарт продаж на все направления</span>
          <span className="ra__chip">Наставничество без ручного прослушивания звонков</span>
        </div>
      </div>

      <h1 className="ra__title">AI-ассистент РОПа — анализ встреч и контроль отдела продаж</h1>

      <p className="ra__subtitle">
        Разбирает записи встреч менеджеров с клиентами, выставляет оценку по этапам продаж и
        показывает руководителю всю команду в одном дашборде
      </p>
      <p className="status-caption ra__status-caption">
        Уже реализованный проект — рабочий продукт, экраны и данные в демонстрации обезличены
      </p>
      <p className="ra__niches">
        Применимо к отделам продаж франшизы, застройщика, стоматологии, госзаказа
      </p>

      <div className="ra__tabs" role="tablist" aria-label="Разделы ассистента">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.key}
            role="tab"
            aria-selected={tab.key === activeKey}
            className={`ra__tab ${tab.key === activeKey ? 'ra__tab--active' : ''}`}
            onClick={() => setActiveKey(tab.key)}
          >
            {tab.tab}
          </button>
        ))}
      </div>

      <div className="ra__stage">
        <div className="ra__stage-info">
          <p className="ra__stage-title">{active.title}</p>
          <p className="ra__stage-desc">{active.desc}</p>
        </div>
        <div className="ra__stage-window">
          <ActiveMockup />
        </div>
      </div>

    </Slide>
  )
}
