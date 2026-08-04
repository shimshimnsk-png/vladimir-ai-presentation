import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { slides } from '../slides'

// Даёт текущему слайду доступ к соседним слайдам и слушает стрелки/пробел/PageUp-PageDown.
export function useSlideNavigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const currentIndex = slides.findIndex((s) => s.path === location.pathname)
  const prevSlide = currentIndex > 0 ? slides[currentIndex - 1] : null
  const nextSlide =
    currentIndex >= 0 && currentIndex < slides.length - 1 ? slides[currentIndex + 1] : null

  const goPrev = () => prevSlide && navigate(prevSlide.path)
  const goNext = () => nextSlide && navigate(nextSlide.path)
  const goTo = (path) => navigate(path)

  useEffect(() => {
    function handleKeyDown(event) {
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault()
        goNext()
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevSlide, nextSlide])

  return { currentIndex, prevSlide, nextSlide, goPrev, goNext, goTo }
}
