import React from 'react';
import "../../styles/Skills.css";

function Skills({skillTechStacks}) {  
    return (
<article class="Skills_Skills__NOlZH" id="skills">
            <div class="Skills_content__g0p1s">
              <div class="SectionTitle_SectionTitle__aqV31">
                <div className="SectionTitle_text__O7xJQ">SKILLS</div>
                <div class="SectionTitle_link-wrapper__VI81N"><img class="SectionTitle_link__WH0x2" src="./pushpin-line.svg" alt="" /></div>
              </div>
              {/* Render the skill tech stacks */}
              {skillTechStacks.map((stack, index) => (
                <div key={index} className="Skills_tech-stacks-container__wPIVK">
                  <div className="Skills_tech-stacks__f20f8">
                    <div className="Skills_title__TH2ju">{stack.skill_tech}</div>
                    <img className="Skills_img__f94MA" src={stack.source} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </article>
    )
              }
export default Skills;