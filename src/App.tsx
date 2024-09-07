import './App.css'

import Header from './components/header'
import PrimaryArticles from './components/primary-articles'
import SecondaryArticles from './components/secondary-articles'
import TertiaryArticles from './components/tertiary-articles'
import Footer from './components/footer'

function App() {
  return (
    <div className="flex flex-col flex-grow bg-blue-main">
      <Header />
      <PrimaryArticles />
      <SecondaryArticles />
      <TertiaryArticles />
      <Footer />
    </div>
  )
}

export default App
