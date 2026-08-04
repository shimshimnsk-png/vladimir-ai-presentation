import './Slide.css'
import { useSlideNavigation } from '../hooks/useSlideNavigation'
import { slides } from '../slides'

// Базовый холст презентационного слайда: строго 1440x900, без скролла.
// number — номер слайда для метки в правом нижнем углу.
// Листается стрелками клавиатуры, пробелом, кликом по краям экрана и точками-индикаторами внизу.
export default function Slide({ number, className = '', children }) {
  const { currentIndex, prevSlide, nextSlide, goPrev, goNext, goTo } = useSlideNavigation()

  return (
    <div className={`slide ${className}`}>
      {children}

      {prevSlide && (
        <button
          type="button"
          className="slide__edge slide__edge--prev"
          onClick={goPrev}
          aria-label="Предыдущий слайд"
        >
          <span className="slide__chevron">‹</span>
        </button>
      )}

      {nextSlide && (
        <button
          type="button"
          className="slide__edge slide__edge--next"
          onClick={goNext}
          aria-label="Следующий слайд"
        >
          <span className="slide__chevron">›</span>
        </button>
      )}

      <div className="slide__dots" role="tablist" aria-label="Навигация по слайдам">
        {slides.map((slide, index) => (
          <button
            key={slide.path}
            type="button"
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={slide.title}
            className={`slide__dot ${index === currentIndex ? 'slide__dot--active' : ''}`}
            onClick={() => goTo(slide.path)}
          />
        ))}
      </div>

      <span className="slide__number">{number}</span>
    </div>
  )
}
