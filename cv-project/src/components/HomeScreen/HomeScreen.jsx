import React from "react";
import GitHubIcon from "../Svgs/GitHubIcon/GitHubIcon";
import InstagramIcon from "../Svgs/InstagramIcon/InstagramIcon";
import MailIcon from "../Svgs/MailIcon/MailIcon";
import styleModule from './homeScreenStyle.module.css'

export default function HomeScreen(props) {
    return (
        <div className="HomeScreen">
            <h1 className={`${styleModule.nameFontSize} ${styleModule.colorStyle}`} style={{color:props.palette.textColor}}>Arian Koochak</h1>
            <h3 className={`${styleModule.titleFontSize} ${styleModule.colorStyle}`} style={{color:props.palette.textColor}}>FullStack Developer</h3>
            <div>
                <a href="https://github.com/ariankoochak" className={styleModule.icons}>
                    <GitHubIcon fill={props.palette.textColor} width="5vh" height="5vh" />
                </a>
                <a href="https://instagram.com/ariankoochak" className={styleModule.icons}>
                    <InstagramIcon fill={props.palette.textColor} width="5vh" height="5vh" />
                </a>
                <a href="https://gmail.com" className={styleModule.icons}>
                    <MailIcon fill={props.palette.textColor} width="5vh" height="5vh" />
                </a>
            </div>
        </div>
    );
}
