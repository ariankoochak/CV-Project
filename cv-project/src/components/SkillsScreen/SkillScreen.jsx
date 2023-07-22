import React from "react";
import CppIcon from "../Svgs/CppIcon/CppIcon";
import JqueryIcon from "../Svgs/JqueryIcon/JqueryIcon";
export default function SkillScreen() {
    return (
        <div className="SkillsScreen">
            <h1>Skills</h1>
            <div>
                <CppIcon width = '50'/>
                <JqueryIcon width = '50' height = '50'/>
            </div>
        </div>
    );
}
