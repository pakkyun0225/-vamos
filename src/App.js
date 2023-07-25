import logo from './logo.svg';
import './App.css';

function App() {
  const sectionTitleStyle = {
    color: '#000000',
    borderBottomColor: '#cccccc'
  };
  const menus = ['About me', 'Skills', 'Archiving', 'Project', 'Career'];
  const Aboutme = [
                    {'label':'이름','value':'박현준'},
                    {'label':'생년월일','value':'96.02.25'},
                    {'label':'주소지','value':'안산시 단원구'},
                    {'label':'연락처','value':'010-3721-0225'},
                    {'label':'이메일','value':'oscarrr0225@gmail.com'}
                ];
  const skillTechStacks = [
                    { 'skill_tech': 'Frontend', 'source': '/images/skills/frontend.png' },
                    { 'skill_tech': 'Backend', 'source': '/images/skills/backend.png' },
                    { 'skill_tech': 'Mobile App', 'source': '/images/skills/mobile-app.png' },
                    { 'skill_tech': 'Communication', 'source': '/images/skills/communication.png' },
                    { 'skill_tech': 'Certificate', 'source': '/images/skills/certificate.jpg' }
                ];
  return (
    <body>
      <div id="__next">
        <div id="root">
          <header class="Header_Header__bkfyR ">
            <div class="Header_content__FPfsl">
              <div class="Header_title__u692O">Pakkyun's Portfolio</div>
              <div class="Header_navigation-menus__p_A9O">
   {/* Render the navigation menus */}
   {menus.map((menu, index) => (
              <div key={index} className="Header_navigation-menu__8vdQ1">
                {menu}
              </div>
            ))}
              </div>
            </div>
          </header>
          <div class="Masthead_Masthead__AqKEv">
                  <div class="Masthead_content__lswMP">
                      <div class="Masthead_title__UKtcP">- 박현준 -<br/>웹 개발자 포트폴리오</div>
                      <hr class="Masthead_divider___SbfQ" />
                      <div class="Masthead_description__VWTuB">A-yo<br />무명 프로그래머 일취월장하며 성장중!<br />Danng</div>
                      <div class="Masthead_find-out-more__8C_Rn">더 알아보기 ↓</div>
                  </div>
          </div>
          <article class="AboutMe_AboutMe__ysYj_" id="about-me">
                <div class="AboutMe_content__nt2Em">
                    <div class="SectionTitle_SectionTitle__aqV31">
                    <div style={sectionTitleStyle} className="SectionTitle_text__O7xJQ">ABOUT ME</div>
                        <div class="SectionTitle_link-wrapper__VI81N"><img class="SectionTitle_link__WH0x2" src="/images/black-link.png" alt="" /></div>
                    </div>
                    <div class="AboutMe_basic-infos__RLZNU">
                        <div class="AboutMe_basic-info-wrapper__p9kae">
                            <div class="AboutMe_basic-info__vpRfY">
                                <div class="AboutMe_icon-img-wrapper__eNduC"><img class="AboutMe_icon-img__xEpEm" src="/images/about-me/person-fill.svg" alt="" /></div>
                                <div class="AboutMe_field__GeyWG">
                                    
            {skillTechStacks.map((stack, index) => (
              <div key={index} className="Skills_tech-stacks-container__wPIVK">
                <div className="Skills_tech-stacks__f20f8">
                  <div className="Skills_title__TH2ju">{stack.skill_tech}</div>
                  <img className="Skills_img__f94MA" src={stack.source} alt="" />
                </div>
              </div>
            ))}
{/* Render the Aboutme */}
{Aboutme.map((information, index) => (
              <div key={index} className="AboutMe_field__GeyWG">
               <div className="AboutMe_field-label__IZxOZ">{information.label}</div>
               <div className="AboutMe_field-value__IZxOZ">{information.value}</div>
              </div>
            ))}
                                </div>
                            </div>
                        </div>
                    <div class="AboutMe_contact-description__u6x4F">* 외주 개발 또는 과외/레슨 문의는&nbsp;<br class="AboutMe_newline__SLvoN" />위 연락처/이메일로 부탁드립니다.</div>
                </div>
                </div>
            </article>

            <article class="Skills_Skills__NOlZH" id="skills">
                <div class="Skills_content__g0p1s">
                    <div class="SectionTitle_SectionTitle__aqV31">
                        <div style={sectionTitleStyle} className="SectionTitle_text__O7xJQ">SKILLS</div>
                        <div class="SectionTitle_link-wrapper__VI81N"><img class="SectionTitle_link__WH0x2" src="/images/black-link.png" alt="" /></div>
                    </div>
                    <div class="Skills_tech-stacks-container__wPIVK">
                        <div class="Skills_tech-stacks__f20f8">
                        <div className="Header_navigation-menus__p_A9O">
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
                </div>
                </div>
                </div>
            </article>

            <article class="Archiving_Archiving__SyeSz" id="archiving">
                <div class="Archiving_content__qxspn">
                    <div class="SectionTitle_SectionTitle__aqV31">
                        <div style={sectionTitleStyle} className="SectionTitle_text__O7xJQ">ARCHIVING</div>
                        <div class="SectionTitle_link-wrapper__VI81N"><img class="SectionTitle_link__WH0x2" src="/images/white-link.png" alt="" /></div>
                    </div>
                    <div class="Archiving_container__IK8rE"><a class="Archiving_git-hub___Dnvc" href="https://github.com/hjcdg1">
                            <div class="Archiving_img-wrapper__AYHcD"><img class="Archiving_img__VxAEe" src="/images/archiving/git-hub.png" alt="" /></div>
                            <div class="Archiving_url__pLmMb">github.com/pakkyun/-vamos</div>
                            <div class="Archiving_description__2Z8C8">
                                <p><b>소스 코드 저장소</b>입니다.</p>
                                <ul>
                                    <li>과거 프로젝트, 프로그램, 앱의 소스 코드</li>
                                    <li>혼자서 코딩 연습을 위해 끄적이던 소스 코드</li>
                                    <li>학부 시절 수강한 수업들의 코딩 과제 소스 코드</li>
                                </ul>
                            </div>
                        </a><a class="Archiving_tistory__c4e1v" href="https://it-eldorado.tistory.com">
                            <div class="Archiving_img-wrapper__AYHcD"><img class="Archiving_img__VxAEe" src="/images/archiving/tistory.png" alt="" /></div>
                            <div class="Archiving_url__pLmMb">pakkyun.tistory.com</div>
                            <div class="Archiving_description__2Z8C8">
                                <p><b>공부 및 지식 공유 목적의 블로그</b>입니다.</p>
                                <ul>
                                    <li>공부한 것을 진정한 나의 것으로 만들기 위한 기록</li>
                                    <li>웹 개발자의 길을 걸으며 공부한 웹 관련 지식 정리</li>
                                    <li>학부 시절 배운 전공 수업들의 내용 복습 겸 정리</li>
                                    <li>지식 공유를 통한 선한 영향력 행사</li>
                                </ul>
                            </div>
                        </a></div>
                </div>
            </article>

            

          </div>
          </div>
    </body>
        );
}

export default App;
