import React from "react";
import CppIcon from "../Svgs/CppIcon/CppIcon";
import JqueryIcon from "../Svgs/JqueryIcon/JqueryIcon";
import NodeJsIcon from "../Svgs/NodeJsIcon/NodeJsIcon";
import PythonIcon from "../Svgs/PythonIcon/PythonIcon";
import ReactIcon from "../Svgs/ReactIcon/ReactIcon";
import SqlIcon from "../Svgs/SqlIcon/SqlIcon";
import SwiftIcon from "../Svgs/SwiftIcon/SwiftIcon";
import styleModule from "./skillScreenStyle.module.css";

export default function SkillScreen() {
    return (
        <div className="SkillsScreen">
            <h1 className={styleModule.titleFontSize}>Skills</h1>
            <div>
                <div className={styleModule.skillStyle}>
                    <CppIcon width="100" />
                    <p>C++</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <JqueryIcon width="100" height="100" />
                    <p>Jquery</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <NodeJsIcon width="100" height="100" />
                    <p>Node Js</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <PythonIcon width="100" height="100" />
                    <p>Python</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <ReactIcon width="100" height="100" />
                    <p>React Js</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <SqlIcon width="100" height="100" />
                    <p>Sql Server</p>
                </div>
                <div className={styleModule.skillStyle}>
                    <SwiftIcon width="100" height="100" />
                    <p>Swift</p>
                </div>
            </div>
        </div>
    );
}
