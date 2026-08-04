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

const directions = ['Госзаказ', 'Франшизы', 'Недвижимость', 'Стоматология']

export default function MarketingContent() {
  return (
    <Slide number="04" className="marketing-content">
      <p className="marketing-content__eyebrow">Маркетинг и контент</p>

      <h1 className="marketing-content__title">AI-система маркетинга и контента</h1>

      <p className="marketing-content__subtitle">
        От разрозненных публикаций к единой системе привлечения предпринимателей из разных ниш
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
        <div className="marketing-content__directions">
          {directions.map((direction) => (
            <span className="marketing-content__direction" key={direction}>
              {direction}
            </span>
          ))}
        </div>

        <p className="marketing-content__note">
          Для каждого направления формируются отдельные предложения, материалы и воронки — без
          смешивания разных аудиторий
        </p>
      </div>
    </Slide>
  )
}
