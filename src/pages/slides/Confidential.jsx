import Slide from '../../components/Slide'
import './Confidential.css'

export default function Confidential() {
  return (
    <Slide number="08" className="confidential">
      <div className="confidential__mark" />

      <p className="confidential__eyebrow">Конфиденциально</p>

      <h1 className="confidential__title">
        Дальше — концепция собственной AI-системы BRAIN
      </h1>

      <p className="confidential__text">
        Материалы предназначены только для персонального ознакомления и не подлежат копированию,
        пересылке или распространению без согласия правообладателя
      </p>
    </Slide>
  )
}
