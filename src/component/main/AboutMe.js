import React from 'react';
import "../../styles/AboutMe.css";

function AboutMe({Aboutme}) {  
    return (
<article class="AboutMe_AboutMe" id="about-me">
            <div class="AboutMe_content">
              <div class="SectionTitle_SectionTitle">
                <div className="SectionTitle_text">ABOUT ME</div>
                <div class="SectionTitle_link-wrapper"><img class="SectionTitle_link__WH0x2" src="./images/pushpin-line.svg" alt="" /></div>
              </div>
              <div class="AboutMe_basic-infos__RLZNU">
                {/* Render the Aboutme */}
                {Aboutme.map((information, index) => (
                  <div key={index} className="AboutMe_basic-info-wrapper__p9kae">
                    <div class="AboutMe_basic-info__vpRfY">
                      <div class="AboutMe_icon-img-wrapper__eNduC"><img class="AboutMe_icon-img__xEpEm" src={information.image} alt="" /></div>
                      <div class="AboutMe_field__GeyWG">
                        <div class="AboutMe_field-label__IZxOZ">{information.label}</div>
                        <div class="AboutMe_field-value__Or_oj">{information.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
                <div class="AboutMe_contact-description__u6x4F">* 외주 개발 또는 과외/레슨 문의는<br class="AboutMe_newline__SLvoN" />위 연락처/이메일로 부탁드립니다.</div>
              </div>
            </div>
          </article>
    )
                }

export default AboutMe;