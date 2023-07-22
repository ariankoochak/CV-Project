import React, { useRef, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import AboutScreen from "./components/AboutScreen/AboutScreen";
import SkillScreen from "./components/SkillsScreen/SkillScreen";
import Snowfall from "react-snowfall";

export default function App() {
    const aboutSit = useRef();
    const skillSit = useRef();
    const homeSit = useRef();
    const [theme, setTheme] = useState({
        backColor: "#4d4d4d",
        textColor: "#ffffff",
    });
    const handleScroll = (nav) => {
        switch (nav) {
            case "About":
                aboutSit.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "Skills":
                skillSit.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "Home":
                homeSit.current.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                console.log("err in handleScroll");
        }
    };
    document.body.style.backgroundColor = theme.backColor;
    return (
        <>
            <NavBar
                navigate={(nav) => handleScroll(nav)}
                changeTheme={(themeName) => {
                    setTheme(themeName);
                }}
                palette={theme}
            />
            <div ref={homeSit}>
                <HomeScreen palette={theme} />
            </div>
            <div ref={aboutSit}>
                <AboutScreen palette={theme} />
            </div>
            <div ref={skillSit}>
                <SkillScreen palette={theme} />
            </div>
            <Snowfall style={{ height: "300vh" }} />
        </>
    );
}
