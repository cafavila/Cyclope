import { useState } from 'react'
import Header from './app/components/Header'
import Footer from './app/components/Footer'
import Nav from './app/components/Nav'
import Main from './app/components/Main'

function App() {
  return (
    <div className='container mx-auto bg-violet-400 p-4'>
      <Header/>
      <Nav />
      <Main/>
      <Footer />
    </div>
  )
}

export default App
