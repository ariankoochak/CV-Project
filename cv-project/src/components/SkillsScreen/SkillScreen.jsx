import React from "react";
import CppIcon from "../Svgs/CppIcon/CppIcon";
import JqueryIcon from "../Svgs/JqueryIcon/JqueryIcon";
import NodeJsIcon from "../Svgs/NodeJsIcon/NodeJsIcon";
import PythonIcon from "../Svgs/PythonIcon/PythonIcon";
import ReactIcon from "../Svgs/ReactIcon/ReactIcon";
import SqlIcon from "../Svgs/SqlIcon/SqlIcon";
import SwiftIcon from "../Svgs/SwiftIcon/SwiftIcon";
export default function SkillScreen() {
    return (
        <div className="SkillsScreen">
            <h1>Skills</h1>
            <div>
                <CppIcon width = '50'/>
                <JqueryIcon width = '50' height = '50'/>
                <NodeJsIcon width='50' height= '50'/>
                <PythonIcon width = '50' height = '50'/>
                <ReactIcon width = '50' height= '50'/>
                <SqlIcon width = '50' height ='50'/>
                <SwiftIcon width = '50' height='50'/>
            </div>
        </div>
    );
}
