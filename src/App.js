import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const getLocalStorage = () => {
    let theme = localStorage.getItem('theme')
    return (theme = JSON.parse(localStorage.getItem('theme')))
  }
  const [toggle, setToggle] = useState(getLocalStorage())

  const themeToggle = () => {
    if (toggle === 'dark-theme') {
      setToggle('light-theme')
    } else {
      setToggle('dark-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = toggle
    localStorage.setItem('theme', JSON.stringify(toggle))
  }, [toggle])
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button className='btn' onClick={themeToggle}>
            toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((article) => {
          return <Article key={article.id} {...article} />
        })}
      </section>
    </main>
  )
}
export default App
