// import './App.css'
import { useState } from 'react'
import Nav from './components/Footer'
import Main from './components/Main'

const AppStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100%',
};

function App() {
  return (
    <div style={AppStyle}>
      <Nav />
      <Main />
    </div>
  )
}

export default App
