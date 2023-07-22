import React from 'react'
import styleModule from './navbarStyle.module.css'
import ThemeIcon from '../Svgs/ThemeIcon/ThemeIcon';

export default function NavBar(props) {
    const handleClick = (e)=>{
        const btn = e.target.textContent;
        switch (btn){
            case 'About':
                props.navigate('About')
                break;
            case 'Skills':
                props.navigate("Skills");
                break;
            case 'Home':
                props.navigate("Home");
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
          <button onClick={handleClick} className={`${styleModule.toRightSide} ${styleModule.buttonColor}`}>Home</button>
          <button onClick={handleClick} className={`${styleModule.toRightSide} ${styleModule.buttonColor}`}>About</button>
          <button onClick={handleClick} className={`${styleModule.toRightSide} ${styleModule.buttonColor}`}>Skills</button>
      </div>
  );
}