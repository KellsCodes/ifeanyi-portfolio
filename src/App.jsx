import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Error404 from './pages/ErrorPage'
import routes from './routes/routes'

function App() {

  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.projects} element={<Projects />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
