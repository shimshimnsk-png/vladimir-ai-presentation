import Slide from '../../components/Slide'
import './BrainDashboard.css'

const insights = [
  'В 12 потенциальных сделках отсутствует следующий шаг. Необходимо вернуть клиентов в работу.',
  'Стоматологическое направление получает больше обращений, но повторные касания выполняются нерегулярно.',
  'По направлению госзаказа на этой неделе отсутствует экспертный контент. Подготовлен рекомендуемый план публикаций.',
  'Три агента не проявляли активность более 14 дней. Сформирован сценарий повторного вовлечения.',
  'Часть коммерческих предложений не получила ответа. Подготовлен список клиентов и варианты сообщений.',
  'Расходы на одно из направлений увеличились. Требуется проверить рентабельность и эффективность канала.',
]

const roles = [
  { title: 'AI-маркетолог', desc: 'Анализирует аудиторию, конкурентов, предложения, каналы продвижения и гипотезы.' },
  { title: 'AI-контент-стратег', desc: 'Формирует контент под продукты, сегменты аудитории и этапы воронки.' },
  { title: 'AI-специалист по продажам', desc: 'Контролирует движение заявок, повторные касания и причины отказов.' },
  { title: 'AI-аналитик', desc: 'Объединяет данные направлений, выявляет закономерности и формирует выводы.' },
  { title: 'AI-финансист', desc: 'Помогает контролировать доходы, расходы, рентабельность и риски.' },
  { title: 'AI-помощник собственника', desc: 'Работает с документами, задачами, встречами и базой знаний компании.' },
]

export default function BrainDashboard() {
  return (
    <Slide number="09" className="brain-dashboard">
      <p className="brain-dashboard__eyebrow">Пример работы BRAIN</p>
      <h1 className="brain-dashboard__title">Что BRAIN может показывать собственнику</h1>

      <div className="brain-dashboard__columns">
        <div className="brain-dashboard__panel">
          <div className="brain-dashboard__panel-head">
            <span className="brain-dashboard__panel-dot" />
            <p>Главное на сегодня</p>
          </div>

          <div className="brain-dashboard__insights">
            {insights.map((text) => (
              <div className="brain-insight" key={text}>
                <span className="brain-insight__mark" />
                <p>{text}</p>
              </div>
            ))}
          </div>

          <p className="brain-dashboard__disclaimer">
            Демонстрационные примеры возможных рекомендаций. Не являются реальными данными бизнеса
            Владимира.
          </p>
        </div>

        <div className="brain-dashboard__roles">
          <p className="brain-dashboard__roles-head">AI-роли внутри BRAIN</p>
          <div className="brain-dashboard__roles-grid">
            {roles.map((role) => (
              <div className="brain-role" key={role.title}>
                <p className="brain-role__title">{role.title}</p>
                <p className="brain-role__desc">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}
