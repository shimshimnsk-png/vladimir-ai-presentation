import { Link } from 'react-router-dom'
import { slides } from '../slides'
import './Home.css'

// Техническое меню для навигации по слайдам. Не является частью презентации.
export default function Home() {
  return (
    <div className="home">
      <p className="home__label">Vladimir AI Presentation — навигация по слайдам</p>
      <ol className="home__list">
        {slides.map((slide) => (
          <li key={slide.path}>
            <Link to={slide.path}>
              <span className="home__number">{slide.number}</span>
              <span>{slide.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
