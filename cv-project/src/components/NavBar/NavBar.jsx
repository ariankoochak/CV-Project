import React from 'react'
import styleModule from './navbarStyle.module.css'
import ThemeIcon from '../Svgs/ThemeIcon/ThemeIcon';

export default function NavBar() {
    const handleClick = (e)=>{
        const btn = e.target.textContent;
        switch (btn){
            case 'About':
                break;
            case 'Skills':
                break;
            default:
                console.log('changing theme');
        }
    }
  return (
      <div className="navbar">
          <button onClick={handleClick}>
              <ThemeIcon fill='white'/>
          </button>
          <button onClick={handleClick} className={styleModule.toRightSide}>About</button>
          <button onClick={handleClick} className={styleModule.toRightSide}>Skills</button>
      </div>
  );
}