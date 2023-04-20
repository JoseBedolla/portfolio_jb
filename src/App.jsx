import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
