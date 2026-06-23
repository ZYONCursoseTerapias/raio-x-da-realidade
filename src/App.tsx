import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IntroPage    from './pages/IntroPage'
import UserInfoPage from './pages/UserInfoPage'
import QuizPage     from './pages/QuizPage'
import ResultsPage  from './pages/ResultsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<IntroPage />} />
        <Route path="/registro"  element={<UserInfoPage />} />
        <Route path="/teste"     element={<QuizPage />} />
        <Route path="/resultado" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
