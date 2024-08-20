import { useState, useEffect } from 'react'
import { Education } from './components/Education'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom';
import { Professional } from './components/Professional';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { General } from './components/General';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  useEffect(() => {
    localStorage.setItem('current_theme', theme);

    return () => { };
  }, [theme]);
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      {/* <Education /> */}
      <Routes>
        <Route exact path="/" element={<Home theme={theme}/>} />
        <Route exact path="/general" element={<General />} />
        <Route exact path="/education" element={<Education theme={theme}/>} />
        <Route exact path="/professional" element={<Professional theme={theme}/>} />
        <Route exact path="/contact" element={<Contact theme={theme}/>} />
      </Routes>

    </>
  )
}

export default App
