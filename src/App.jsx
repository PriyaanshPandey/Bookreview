import { useTheme } from "./hooks/useTheme.js"
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import BookReviews from './components/BookReviews/BookReviews.jsx'
import CurrentlyReading from './components/CurrentlyReading/CurrentlyReading.jsx'
import MoodRecs from './components/MoodRecs/MoodRecs.jsx'
import Footer from './components/Footer/Footer.jsx'
import './styles/theme.css'

function App() {
  const { theme, toggle } = useTheme()

  return (
    
       <div data-theme={theme}>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <BookReviews />
        <CurrentlyReading />
        <MoodRecs />
      </main>
      <Footer />
    </div>  

    
  )
}

export default App
