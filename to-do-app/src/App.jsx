import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Main from './components/Main'

function App() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center w-auto px-0 sm:pt-6 lg:px-8*'>
      <Header/>
      <Nav />
      <Main/>
      <Footer />
    </div>
  )
}

export default App