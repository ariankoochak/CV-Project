import React from "react";
import iconSrc from './cpp.svg'

export default function CppIcon(props) {
    return (
        <>
        <img src={iconSrc} alt="cppIcon" width={props.width} />
        </>
    );
}
