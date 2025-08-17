import { useState } from 'react'
import Home from './components/Home'
import './App.css'
import { BackgroundLines } from "./components/ui/background-lines";


function App() {


  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 
                    dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 
                    relative z-20 font-bold tracking-tight">
          Enhance Your Images
        </h2>

        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          get the best out of your images with our AI-powered image enhancer.
        </p>
        <footer className="fixed bottom-0 w-full py-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
          Powered by <span className="font-semibold">Jatin Shewale</span>
        </footer>
      </BackgroundLines>
      
      <div className='flex items-center justify-center w-full h-[100vh] flex-col px-4 bg-black'>
        <Home/>
      </div>
    </>
  )
}

export default App
