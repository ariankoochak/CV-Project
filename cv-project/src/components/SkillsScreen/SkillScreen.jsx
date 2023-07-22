import React from "react";
import CppIcon from "../Svgs/CppIcon/CppIcon";
import JqueryIcon from "../Svgs/JqueryIcon/JqueryIcon";
import NodeJsIcon from "../Svgs/NodeJsIcon/NodeJsIcon";
import PythonIcon from "../Svgs/PythonIcon/PythonIcon";
import ReactIcon from "../Svgs/ReactIcon/ReactIcon";
import SqlIcon from "../Svgs/SqlIcon/SqlIcon";
import SwiftIcon from "../Svgs/SwiftIcon/SwiftIcon";
import styleModule from "./skillScreenStyle.module.css";
export default function SkillScreen(props) {
    return (
        <div className="SkillsScreen">
            <h1
                className={`${styleModule.titleFontSize} ${styleModule.titleColor}`}
                style={{ color: props.palette.textColor }}
            >
                Skills
            </h1>
            <div>
                <div className={styleModule.skillStyle}>
                    <CppIcon width="100" />
                    <p style={{ color: props.palette.textColor }}>C++</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <JqueryIcon width="100" height="100" />
                    <p style={{ color: props.palette.textColor }}>Jquery</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <NodeJsIcon width="100" height="100" />
                    <p style={{ color: props.palette.textColor }}>Node Js</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <PythonIcon width="100" height="100" />
                    <p style={{ color: props.palette.textColor }}>Python</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <ReactIcon width="100" height="100" />
                    <p style={{ color: props.palette.textColor }}>React Js</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <SqlIcon width="100" height="100" />
                    <p style={{ color: props.palette.textColor }}>Sql Server</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <SwiftIcon width="100" height="100" />
                    <p style={{ color: props.palette.textColor }}>Swift</p>
                </div>
            </div>
        </div>
    );
}
