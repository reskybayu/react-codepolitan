import Article from './components/Article'
import './App.css'
import HomePage from './pages/Index'
import { GlobalContext } from './context'

function App() {
  
  const user = {
    username : "Bayu"
  }

  return (
    <>
      <div>
        <GlobalContext.Provider value={user}>
          <HomePage/>
        </GlobalContext.Provider>
      </div> 
    </>
  )
}

export default App
