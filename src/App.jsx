import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Cover from './pages/slides/Cover'
import RemontPro from './pages/slides/RemontPro'
import YristCase from './pages/slides/YristCase'
import AiVnedreniya from './pages/slides/AiVnedreniya'
import Jarvis from './pages/slides/Jarvis'
import MarketingContent from './pages/slides/MarketingContent'
import Sales from './pages/slides/Sales'
import AgentSystem from './pages/slides/AgentSystem'
import Ecosystem from './pages/slides/Ecosystem'
import BrainOverview from './pages/slides/BrainOverview'
import BrainDashboard from './pages/slides/BrainDashboard'
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
      <Route path="/03-yrist" element={<YristCase />} />
      <Route path="/04-ai-vnedreniya" element={<AiVnedreniya />} />
      <Route path="/05-jarvis" element={<Jarvis />} />
      <Route path="/06-marketing-content" element={<MarketingContent />} />
      <Route path="/07-sales" element={<Sales />} />
      <Route path="/08-agent-system" element={<AgentSystem />} />
      <Route path="/09-ecosystem" element={<Ecosystem />} />
      <Route path="/10-brain-overview" element={<BrainOverview />} />
      <Route path="/11-brain-dashboard" element={<BrainDashboard />} />
      <Route path="/12-two-levels" element={<TwoLevels />} />
      <Route path="/13-next-step" element={<NextStep />} />
    </Routes>
  )
}

export default App
