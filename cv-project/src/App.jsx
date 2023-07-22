import React from 'react'
import NavBar from './components/NavBar/NavBar';
import HomeScreen from './components/HomeScreen/HomeScreen';
import AboutScreen from './components/AboutScreen/AboutScreen';
import SkillScreen from './components/SkillsScreen/SkillScreen';

export default function App() {
  return (
      <>
      <NavBar/>
      <HomeScreen/>
      <AboutScreen/>
      <SkillScreen/>
      </>
  );
}
