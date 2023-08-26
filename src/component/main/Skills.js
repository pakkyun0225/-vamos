import React from 'react';
import "../../styles/Skills.css";


export const SkillStack = ({ title, imgSrc }) => (
  <div className="Skills_tech-stacks__f20f8">
      <div className="Skills_title__TH2ju">{title}</div>
      <img className="Skills_img__f94MA" src={imgSrc} alt={title} />
  </div>
);

const SkillsSection = ({skillsData}) => (
  <article>
      <article className="Skills_Skills__NOlZH" id="skills">
          <div className="Skills_content__g0p1s">
              <div className="SectionTitle_SectionTitle__aqV31">
                  <div className="SectionTitle_text__O7xJQ">SKILLS</div>
                  <div className="SectionTitle_link-wrapper__VI81N">
                      <img className="SectionTitle_link__WH0x2" src="./images/pushpin-line.svg" alt="" />
                  </div>
              </div>
              <div className="Skills_tech-stacks-container__wPIVK">
                  {skillsData.map((skill, index) => (
                      <SkillStack key={index} title={skill.title} imgSrc={skill.imgSrc} />
                  ))}
              </div>
          </div>
      </article>
  </article>
);

export default SkillsSection;