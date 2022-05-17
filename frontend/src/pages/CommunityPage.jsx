import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Basics from "../components/Community/BasicsSection";
import FavoriteTopics from "../components/Community/FavoriteTopics";
import Front from "../components/Community/FrontSection";
import GetInvolvedSection from "../components/Community/GetInvolvedSection";
import Navbar from "../components/Community/Navbar";
import TutorialsSection from "../components/Community/TutorialsSection";
import bgC1 from "../img/bgC1.svg";

export default function CommunityPage(props) {
  // props.setNavDisplay('none')
  useEffect(() => {
    // props.setNavDisplay('none')
    window.addEventListener("resize", (event) => {
      console.log(window.innerWidth);
      setShowBackground(window.innerWidth > 1100);
    });
  }, []);
  const [ShowBackground, setShowBackground] = useState(
    window.innerWidth > 1100
  );
  return (
    <div
      className="container-fluid overflow-hidden"
      style={{
        backgroundImage: ShowBackground ? `url(${bgC1})` : "none",
        backgroundPosition: "-35% 8%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Front ShowBackground={ShowBackground}></Front> */}
      <Navbar></Navbar>
      <Basics></Basics>
      <TutorialsSection></TutorialsSection>
      <GetInvolvedSection></GetInvolvedSection>
      <FavoriteTopics></FavoriteTopics>
    </div>
  );
}
