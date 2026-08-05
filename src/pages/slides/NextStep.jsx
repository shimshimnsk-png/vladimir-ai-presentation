import Slide from '../../components/Slide'
import './NextStep.css'

const steps = [
  {
    n: '01',
    title: 'Разбор текущей ситуации',
    desc: 'Как сейчас устроены маркетинг, создание контента, продажи и работа с агентами',
  },
  {
    n: '02',
    title: 'Поиск узких мест',
    desc: 'Где сотрудники теряют время, где пропадают заявки и какие процессы зависят от собственника',
  },
  {
    n: '03',
    title: 'Определение приоритетов',
    desc: 'Что даст самый быстрый результат: личный помощник, продажи, контент, агентская система или единая платформа',
  },
  {
    n: '04',
    title: 'Архитектура внедрения',
    desc: 'Какие решения необходимы, в какой последовательности их внедрять и как связать между собой',
  },
]

export default function NextStep() {
  return (
    <Slide number="14" className="next-step">
      <p className="next-step__eyebrow">Следующий шаг</p>

      <h1 className="next-step__title">Следующий шаг — диагностика текущих процессов</h1>

      <p className="next-step__subtitle">
        Чтобы определить, какие решения действительно нужны бизнесу, сначала необходимо понять
        существующую систему работы
      </p>

      <div className="next-step__steps">
        {steps.map((step, index) => (
          <div className="next-step-step" key={step.n}>
            <div className="next-step-step__card">
              <span className="next-step-step__number">{step.n}</span>
              <p className="next-step-step__title">{step.title}</p>
              <p className="next-step-step__desc">{step.desc}</p>
            </div>
            {index < steps.length - 1 && <span className="next-step-step__arrow">→</span>}
          </div>
        ))}
      </div>

      <div className="next-step__accent">
        <p>
          Не обязательно создавать большую систему сразу. Можно начать с одного наиболее
          проблемного направления и постепенно расширять автоматизацию.
        </p>
      </div>

      <p className="next-step__signature">
        Олеся Лиханова — разработка AI-решений и цифровых систем для бизнеса
      </p>
    </Slide>
  )
}
