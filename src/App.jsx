import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Cover from './pages/slides/Cover'
import RemontPro from './pages/slides/RemontPro'
import Jarvis from './pages/slides/Jarvis'
import MarketingContent from './pages/slides/MarketingContent'
import Sales from './pages/slides/Sales'
import AgentSystem from './pages/slides/AgentSystem'
import Ecosystem from './pages/slides/Ecosystem'
import BrainOverview from './pages/slides/BrainOverview'
import BrainDashboard from './pages/slides/BrainDashboard'
import BrainShift from './pages/slides/BrainShift'
import BrainClose from './pages/slides/BrainClose'
import TwoLevels from './pages/slides/TwoLevels'
import NextStep from './pages/slides/NextStep'

function App() {
  return (
    <Routes>
      {/* Ссылка, которую получает клиент, ведёт прямо на первый слайд */}
      <Route path="/" element={<Navigate to="/01-cover" replace />} />
      {/* Техническое меню — только для внутренней работы, клиенту не нужно */}
      <Route path="/menu" element={<Home />} />

      <Route path="/01-cover" element={<Cover />} />
      <Route path="/02-remont-pro" element={<RemontPro />} />
      <Route path="/03-jarvis" element={<Jarvis />} />
      <Route path="/04-marketing-content" element={<MarketingContent />} />
      <Route path="/05-sales" element={<Sales />} />
      <Route path="/06-agent-system" element={<AgentSystem />} />
      <Route path="/07-ecosystem" element={<Ecosystem />} />
      <Route path="/08-brain-overview" element={<BrainOverview />} />
      <Route path="/09-brain-dashboard" element={<BrainDashboard />} />
      <Route path="/10-brain-shift" element={<BrainShift />} />
      <Route path="/11-brain-close" element={<BrainClose />} />
      <Route path="/12-two-levels" element={<TwoLevels />} />
      <Route path="/13-next-step" element={<NextStep />} />
    </Routes>
  )
}

export default App
