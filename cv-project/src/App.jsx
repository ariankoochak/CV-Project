import React from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import NavBar from './components/NavBar/NavBar'
import AboutScreen from './components/AboutScreen/AboutScreen'
import SkillScreen from './components/SkillsScreen/SkillScreen'

export default function App() {
  return (
    <>
      <NavBar/>
      <HomeScreen/>
      <AboutScreen/>
      <SkillScreen/>
    </>
  )
}