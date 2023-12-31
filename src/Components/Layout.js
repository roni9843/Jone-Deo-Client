import React from "react";
import AboutMe from "./AboutMe";
import CompleteProjectComponent from "./CompleteProjectComponent";
import ContactMe from "./ContactMe";
import IntroduceComponents from "./IntroduceComponents";
import MySkillsComponent from "./MySkillsComponent";
import PortfolioComponent from "./PortfolioComponent";
export default function Layout() {
  return (
    <div>
      <IntroduceComponents></IntroduceComponents>
      <PortfolioComponent></PortfolioComponent>
      <MySkillsComponent></MySkillsComponent>
      <CompleteProjectComponent></CompleteProjectComponent>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </div>
  );
}
