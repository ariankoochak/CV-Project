import React, { useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import AboutScreen from "./components/AboutScreen/AboutScreen";
import SkillScreen from "./components/SkillsScreen/SkillScreen";
import Snowfall from "react-snowfall";

export default function App() {
    const aboutSit = useRef();
    const skillSit = useRef();
    const homeSit = useRef();
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
    return (
        <>
            <NavBar navigate={(nav) => handleScroll(nav)} />
            <div ref={homeSit}>
              <HomeScreen />
            </div>
            <div ref={aboutSit}>
                <AboutScreen />
            </div>
            <div ref={skillSit}>
                <SkillScreen />
            </div>
            <Snowfall style={{height:'300vh'}}/>
        </>
    );
}
