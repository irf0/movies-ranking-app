import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CounterApp from './CounterApp/CounterApp'
import MoviesApp from './MoviesApp/MoviesApp'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './Home'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router>


        {/* TOP NAV */}
        <nav>
          <Link to="/"></Link>

        </nav>

        {/* CONTENT */}
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<CounterApp />} />
            <Route path="/movies" element={<MoviesApp />} />
          </Routes>
        </div>


      </Router>
    </QueryClientProvider>
  )
}

export default App

