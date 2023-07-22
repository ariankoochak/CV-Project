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
                const Themes = [
                    {
                        backColor: "#a3b18a",
                        textColor: "#588157",
                    },
                    {
                        backColor: "#4a4e69",
                        textColor: "#22223b",
                    },
                    {
                        backColor: "#4d4d4d",
                        textColor: "#ffffff",
                    },
                    {
                        backColor: "#778da9",
                        textColor: "#1b263b",
                    },
                    {
                        backColor: "#b6ad90",
                        textColor: "#582f0e",
                    },
                    {
                        backColor: "#d58936",
                        textColor: "#3c1518",
                    },
                    {
                        backColor: "#3a3238",
                        textColor: "#f5e3e0",
                    },
                    {
                        backColor: "#e5383b",
                        textColor: "#660708",
                    },
                ];
                props.changeTheme(Themes[Math.floor(Math.random()*Themes.length)])
        }
    }
  return (
      <div className="navbar">
          <button onClick={handleClick}>
              <ThemeIcon fill={props.palette.textColor}/>
          </button>
          <button onClick={handleClick} className={`${styleModule.toRightSide} ${styleModule.buttonColor}`} style={{color:props.palette.textColor}} >Home</button>
          <button onClick={handleClick} className={`${styleModule.toRightSide} ${styleModule.buttonColor}`} style={{color:props.palette.textColor}} >About</button>
          <button onClick={handleClick} className={`${styleModule.toRightSide} ${styleModule.buttonColor}`} style={{color:props.palette.textColor}} >Skills</button>
      </div>
  );
}