import React from 'react';
import "../../styles/Career.css";

function Career({career}) {
    return (
        <article class="Career_Career__w0U0z" id="career">
            <div class="Career_content__6_8pM"/>
                <div class="SectionTitle_SectionTitle__aqV31">
                    <div class="SectionTitle_text__O7xJQ" >CAREER</div>
                    <div class="SectionTitle_link-wrapper__VI81N"><img class="SectionTitle_link__WH0x2" src="./images/pushpin-line.svg" alt="" /></div>
                </div>
                <div class="Career_companies__zP9qN">
                    <div class="Career_company__I_V_1">
                    <div class="Career_logo-container__otW3c">
                        {career.map((career, index) => (
                                <><div class="Career_logo-wrapper__IRmTo"><img class="Career_logo__WgFXr" src={career.logosrc} alt="" /></div>
                                <div key={index} class="Career_info__M8b0w">
                                <div class="Career_title__aXl4q">{career.title}</div>
                                <div class="Career_period__SLQR_">{career.period}</div>
                                <div class="Career_description__iZPxT">{career.dsc}</div>
                                <ul class="Career_works__deS2P">
                                    <h4 class="Career_works-title__uwkNU">{career.works[0]}</h4>
                                    <li>{career.detail[0]}</li>
                                    <li>{career.detail[1]}</li>
                                    <li>{career.detail[2]}</li>
                                    <h4 class="Career_works-title__uwkNU">{career.works[1]}</h4>
                                    <li>{career.detail[0]}</li>
                                    <li>{career.detail[1]}</li>
                                    <li>{career.detail[2]}</li>
                                    <h4 class="Career_works-title__uwkNU">{career.works[2]}</h4>
                                    <li>{career.detail[0]}</li>
                                    <li>{career.detail[1]}</li>
                                    <li>{career.detail[2]}</li>
                                </ul>
                            </div></>
                        ))}
                    </div>
                </div>
            </div>
        </article>
        
    )
}

export default Career;