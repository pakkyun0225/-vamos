import logo from './logo.svg';
import './App.css';

function App() {
  const sectionTitleStyle = {
    color: '#000000',
    borderBottomColor: '#cccccc'
  };
  return (
    <body>
      <div id="__next">
        <div id="root">
          <header class="Header_Header__bkfyR ">
            <div class="Header_content__FPfsl">
              <div class="Header_title__u692O">CDG's Portfolio</div>
              <div class="Header_navigation-menus__p_A9O">
                <div class="Header_navigation-menu__8vdQ1">About me</div>
                <div class="Header_navigation-menu__8vdQ1">Skills</div>
                <div class="Header_navigation-menu__8vdQ1">Archiving</div>
                <div class="Header_navigation-menu__8vdQ1">Projects</div>
                <div class="Header_navigation-menu__8vdQ1">Career</div>
              </div>
            </div>
          </header>
          <div class="Masthead_Masthead__AqKEv">
                  <div class="Masthead_content__lswMP">
                      <div class="Masthead_title__UKtcP">- 최덕경 -<br/>웹 개발자 포트폴리오</div>
                      <hr class="Masthead_divider___SbfQ" />
                      <div class="Masthead_description__VWTuB">안녕하세요.<br />공부가 취미인 풀 스택 웹 개발자입니다.<br />매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다.</div>
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
                                    <div class="AboutMe_field-label__IZxOZ">이름</div>
                                    <div class="AboutMe_field-value__Or_oj">박현준</div>
                                </div>
                            </div>
                        </div>
                        <div class="AboutMe_basic-info-wrapper__p9kae">
                            <div class="AboutMe_basic-info__vpRfY">
                                <div class="AboutMe_icon-img-wrapper__eNduC"><img class="AboutMe_icon-img__xEpEm" src="/images/about-me/calendar-fill.svg" alt="" /></div>
                                <div class="AboutMe_field__GeyWG">
                                    <div class="AboutMe_field-label__IZxOZ">생년월일</div>
                                    <div class="AboutMe_field-value__Or_oj">96.02.25</div>
                                </div>
                            </div>
                        </div>
                        <div class="AboutMe_basic-info-wrapper__p9kae">
                            <div class="AboutMe_basic-info__vpRfY">
                                <div class="AboutMe_icon-img-wrapper__eNduC"><img class="AboutMe_icon-img__xEpEm" src="/images/about-me/geo-alt-fill.svg" alt="" /></div>
                                <div class="AboutMe_field__GeyWG">
                                    <div class="AboutMe_field-label__IZxOZ">주소지</div>
                                    <div class="AboutMe_field-value__Or_oj">안산시 단원구</div>
                                </div>
                            </div>
                        </div>
                        <div class="AboutMe_basic-info-wrapper__p9kae">
                            <div class="AboutMe_basic-info__vpRfY">
                                <div class="AboutMe_icon-img-wrapper__eNduC"><img class="AboutMe_icon-img__xEpEm" src="/images/about-me/telephone-fill.svg" alt="" /></div>
                                <div class="AboutMe_field__GeyWG">
                                    <div class="AboutMe_field-label__IZxOZ">연락처</div>
                                    <div class="AboutMe_field-value__Or_oj"><a class="AboutMe_email__up_5k" href="tel:010-4582-5037">010-3721-0225</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="AboutMe_basic-info-wrapper__p9kae">
                            <div class="AboutMe_basic-info__vpRfY">
                                <div class="AboutMe_icon-img-wrapper__eNduC"><img class="AboutMe_icon-img__xEpEm" src="/images/about-me/envelope-fill.svg" alt="" /></div>
                                <div class="AboutMe_field__GeyWG">
                                    <div class="AboutMe_field-label__IZxOZ">이메일</div>
                                    <div class="AboutMe_field-value__Or_oj"><a class="AboutMe_email__up_5k" href="mailto:hjcdg197@gmail.com">oscarrr0225@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="AboutMe_basic-info-wrapper__p9kae">
                            <div class="AboutMe_basic-info__vpRfY">
                                <div class="AboutMe_icon-img-wrapper__eNduC"><img class="AboutMe_icon-img__xEpEm" src="/images/about-me/pencil-fill.svg" alt="" /></div>
                                <div class="AboutMe_field__GeyWG">
                                    <div class="AboutMe_field-label__IZxOZ">학력</div>
                                    <div class="AboutMe_field-value__Or_oj">한국외국어대학교<br />(독일어과)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="AboutMe_contact-description__u6x4F">* 외주 개발 또는 과외/레슨 문의는&nbsp;<br class="AboutMe_newline__SLvoN" />위 연락처/이메일로 부탁드립니다.</div>
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
                            <div class="Skills_title__TH2ju">Frontend</div><img class="Skills_img__f94MA" src="/images/skills/frontend.png" alt="" />
                        </div>
                        <div class="Skills_tech-stacks__f20f8">
                            <div class="Skills_title__TH2ju">Backend</div><img class="Skills_img__f94MA" src="/images/skills/backend.png" alt="" />
                        </div>
                        <div class="Skills_tech-stacks__f20f8">
                            <div class="Skills_title__TH2ju">Mobile App</div><img class="Skills_img__f94MA" src="/images/skills/mobile-app.png" alt="" />
                        </div>
                        <div class="Skills_tech-stacks__f20f8">
                            <div class="Skills_title__TH2ju">Deployment</div><img class="Skills_img__f94MA" src="/images/skills/deployment.png" alt="" />
                        </div>
                        <div class="Skills_tech-stacks__f20f8">
                            <div class="Skills_title__TH2ju">Version Control</div><img class="Skills_img__f94MA" src="/images/skills/version-control.png" alt="" />
                        </div>
                        <div class="Skills_tech-stacks__f20f8">
                            <div class="Skills_title__TH2ju">Communication</div><img class="Skills_img__f94MA" src="/images/skills/communication.png" alt="" />
                        </div>
                        <div class="Skills_tech-stacks__f20f8">
                            <div class="Skills_title__TH2ju">Certificate</div><img class="Skills_img__f94MA" src="/images/skills/certificate.jpg" alt="" />
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

            <article class="Projects_Projects__E9SvD" id="projects">
                  <div class="Projects_content__HRavM">
                      <div class="SectionTitle_SectionTitle__aqV31">
                          <div style={sectionTitleStyle} className="SectionTitle_text__O7xJQ">PROJECTS</div>
                          <div class="SectionTitle_link-wrapper__VI81N"><img class="SectionTitle_link__WH0x2" src="/images/white-link.png" alt="" /></div>
                      </div>
                      <div class="Projects_projects__PvBb6">
                          <div class="Projects_project__hHhvb">
                              <div class="Projects_title__0IuQ3">무슨 노래 부르지?</div>
                              <div class="Projects_period__HDo5Z">2022.10&nbsp;<span class="Projects_new-line-chunk__MLz0c">(1人 개인 프로젝트)</span></div>
                              <div class="Projects_info___utyZ">
                                  <div class="Projects_img-carousel__e8hwy">
                                      <div style={sectionTitleStyle} className="Projects_imgs__datEq">
                                          <div class="Projects_img-wrapper__0b8Tt"><img class="Projects_img__OAyqd" src="/images/projects/what-to-sing/8.jpg" alt="" /></div>
                                          <div class="Projects_img-wrapper__0b8Tt"><img class="Projects_img__OAyqd" src="/images/projects/what-to-sing/1.jpg" alt="" /></div>
                                          <div class="Projects_img-wrapper__0b8Tt"><img class="Projects_img__OAyqd" src="/images/projects/what-to-sing/2.jpg" alt="" /></div>
                                          <div class="Projects_img-wrapper__0b8Tt"><img class="Projects_img__OAyqd" src="/images/projects/what-to-sing/3.jpg" alt="" /></div>
                                          <div class="Projects_img-wrapper__0b8Tt"><img class="Projects_img__OAyqd" src="/images/projects/what-to-sing/4.jpg" alt="" /></div>
                                          <div class="Projects_img-wrapper__0b8Tt"><img class="Projects_img__OAyqd" src="/images/projects/what-to-sing/5.jpg" alt="" /></div>
                                          <div class="Projects_img-wrapper__0b8Tt"><img class="Projects_img__OAyqd" src="/images/projects/what-to-sing/6.jpg" alt="" /></div>
                                          <div class="Projects_img-wrapper__0b8Tt"><img class="Projects_img__OAyqd" src="/images/projects/what-to-sing/7.jpg" alt="" /></div>
                                          <div class="Projects_img-wrapper__0b8Tt"><img class="Projects_img__OAyqd" src="/images/projects/what-to-sing/8.jpg" alt="" /></div>
                                      </div>
                                      <nav class="Projects_nav__Inoba">
                                          <div class="Projects_prev__wS3_z"><img src="/images/arrow-left.svg" alt="" /></div>
                                          <div class="Projects_page__zHIqO">1/8</div>
                                          <div class="Projects_next__3RYWe"><img src="/images/arrow-right.svg" alt="" /></div>
                                      </nav>
                                     </div>
                                     </div>
                                     <div class="Projects_descriptions__2g3bi">
                                      <div class="Projects_main-description__JVRu1"><b>노래방을 즐기는 사람의 입장에서 자주 부르는 노래를 간편하게 관리할 수 있도록 도와주는 웹사이트</b>입니다. 제 취미가 아이디어의 원천이었고, 저와 취미가 같은 사람들에게 도움이 되었으면 하는 마음으로 개발했습니다.<p></p><span class="Projects_red__r_DWh">Firebase</span> 서비스를 처음 사용해봤다는 것만으로도 의미가 있었지만, 그 과정에서 <span class="Projects_red__r_DWh">OAuth 2.0</span>의 개념을 한 번 더 깊게 다지고 <span class="Projects_red__r_DWh">NoSQL</span>을 실제로 사용해볼 수 있었다는 점에서 더욱 의미가 있었습니다.<p></p>최근에 인기가 많은 <span class="Projects_red__r_DWh">Tailwind CSS</span>를 처음으로 사용해보며 이것의 차별적인 유용성을 느낄 수 있었고, 동시에 <span class="Projects_red__r_DWh">PostCSS</span>가 무엇인지 배우는 계기도 되었습니다.<p></p>이론으로만 알고 있던 <span class="Projects_red__r_DWh">PWA</span>를 실제로 구현해봄으로써 앞으로 웹 생태계가 뻗어나갈 무한한 가능성과 확장성을 몸소 체감할 수 있었습니다.<p></p>
                                          <div class="Projects_show-readme-btn__v1p__">자세히 보기 ▶ README</div>
                                      </div>
                                      <div class="Projects_description___gCV_">
                                          <div class="Projects_label__OLO6p">주요 기능</div>
                                          <div class="Projects_value__B9RY_">자주 부르는 노래의 가수명 및 제목 기록하기, 간편한 분류를 위해 각 노래에 태깅하기, 노래의 가수명 및 제목으로 검색해 보기, 가수 또는 태그에 따라 분류해 보기</div>
                                      </div>
                                      <div class="Projects_description___gCV_">
                                          <div class="Projects_label__OLO6p">GitHub</div>
                                          <div class="Projects_value__B9RY_"><a class="Projects_url__5cSRT" href="https://github.com/hjcdg1/what-to-sing">github.com/hjcdg1/what-to-sing</a></div>
                                      </div>
                                      <div class="Projects_description___gCV_">
                                          <div class="Projects_label__OLO6p">URL</div>
                                          <div class="Projects_value__B9RY_"><a class="Projects_url__5cSRT" href="https://what-to-sing.ga">what-to-sing.ga</a></div>
                                      </div>
                                      <div class="Projects_description___gCV_">
                                          <div class="Projects_label__OLO6p">Frontend</div>
                                          <div class="Projects_value__B9RY_">Next.js, Recoil, TypeScript, Sass, PostCSS, Tailwind CSS</div>
                                      </div>
                                      <div class="Projects_description___gCV_">
                                          <div class="Projects_label__OLO6p">Backend</div>
                                          <div class="Projects_value__B9RY_">Firebase Authentication</div>
                                      </div>
                                      <div class="Projects_description___gCV_">
                                          <div class="Projects_label__OLO6p">Database</div>
                                          <div class="Projects_value__B9RY_">Firebase Realtime Database</div>
                                      </div>
                                      <div class="Projects_description___gCV_">
                                          <div class="Projects_label__OLO6p">Deployment</div>
                                          <div class="Projects_value__B9RY_">Vercel, Firebase (Authentication, Realtime Database)</div>
                                     </div>
                                     </div>
                                     </div>
                                     </div>
                                     </div>
                                  </article>

          </div>
          </div>
    </body>
        );
}

export default App;
