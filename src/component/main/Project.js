import React from 'react';
import "../../styles/Project.css";

function Project({projects}) {  
    return (
<article class="Projects_Projects__E9SvD" id="projects">
            <div class="Projects_content__HRavM">
              <div class="SectionTitle_SectionTitle__aqV31">
                <div className="SectionTitle_text__O7xJQ">PROJECTS</div>
                <div class="SectionTitle_link-wrapper__VI81N"><img class="SectionTitle_link__WH0x2" src="/images/white-link.png" alt="" /></div>
              </div>
              {/* Render Project */}
              {projects && projects.map((proj, index) => (
                <div key={index} className="Projects_projects__PvBb6">
                  <div className="Projects_project__hHhvb">
                    <div className="Projects_title__0IuQ3">{proj.title}</div>
                    <div className="Projects_period__HDo5Z">{proj.date}</div>
                    <div class="Projects_info___utyZ">
                      <div class="Projects_img-carousel__e8hwy">
                        <div className="Projects_imgs__datEq">
                          <div class="Projects_img-wrapper__0b8Tt"><img class={proj.imgsrc} alt="" /></div>
                          <div class="Projects_img-wrapper__0b8Tt"><img class={proj.imgsrc} alt="" /></div>
                          <div class="Projects_img-wrapper__0b8Tt"><img class={proj.imgsrc} alt="" /></div>
                          <div class="Projects_img-wrapper__0b8Tt"><img class={proj.imgsrc} alt="" /></div>
                          <div class="Projects_img-wrapper__0b8Tt"><img class={proj.imgsrc} alt="" /></div>
                        </div>
                        <nav class="Projects_nav__Inoba">
                          <div class="Projects_prev__wS3_z"><img src="/images/arrow-left.svg" alt="" /></div>
                          <div class="Projects_page__zHIqO">1/8</div>
                          <div class="Projects_next__3RYWe"><img src="/images/arrow-right.svg" alt="" /></div>
                        </nav>
                      </div>
                      <div class="Projects_descriptions__2g3bi">
                        <div class="Projects_main-description__JVRu1">{proj.dsc}
                          <div class="Projects_show-readme-btn__v1p__">자세히 보기 ▶ README</div>
                        </div>
                        <div class="Projects_description___gCV_">
                          <div class="Projects_label__OLO6p">주요 기능</div>
                          <div class="Projects_value__B9RY_">{proj.func}</div>
                        </div>
                        <div class="Projects_description___gCV_">
                          <div class="Projects_label__OLO6p">GitHub</div>
                          <div class="Projects_value__B9RY_"><a class="Projects_url__5cSRT" href={proj.github}>{proj.github}</a></div>
                        </div>
                        <div class="Projects_description___gCV_">
                          <div class="Projects_label__OLO6p">URL</div>
                          <div class="Projects_value__B9RY_"><a class="Projects_url__5cSRT" href={proj.URL}>{proj.URL}</a></div>
                        </div>
                        <div class="Projects_description___gCV_">
                          <div class="Projects_label__OLO6p">{proj.techstack}</div>
                          <div class="Projects_value__B9RY_">{proj.tech}</div>
                        </div>
                        <div class="Projects_description___gCV_">
                          <div class="Projects_label__OLO6p">{proj.techstack}</div>
                          <div class="Projects_value__B9RY_">{proj.tech}</div>
                        </div>
                        <div class="Projects_description___gCV_">
                          <div class="Projects_label__OLO6p">{proj.techstack}</div>
                          <div class="Projects_value__B9RY_">{proj.tech}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
    )
              }

export default Project;