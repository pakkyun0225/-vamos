import './styles/App.css';
import Header from './component/base/Header';

function App() {
  const sectionTitleStyle = {
    color: '#000000',
    borderBottomColor: '#cccccc'
  };
  const menus = ['About me', 'Skills', 'Archiving', 'Project', 'Career'];
  const Aboutme = [
    { 'image': './images/person-fill.svg', 'label': '이름', 'value': '박현준' },
    { 'image': './images/calendar-fill.svg', 'label': '생년월일', 'value': '96.02.25' },
    { 'image': './images/geo-alt-fill.svg', 'label': '주소지', 'value': '안산시 단원구' },
    { 'image': './images/telephone-fill.svg', 'label': '연락처', 'value': '010-3721-0225' },
    { 'image': './images/envelope-fill.svg', 'label': '이메일', 'value': 'oscarrr0225@gmail.com' }
  ];
  const skillTechStacks = [
    { 'skill_tech': 'Frontend', 'source': 'src/images/skills/frontend.png' },
    { 'skill_tech': 'Backend', 'source': '/images/skills/backend.png' },
    { 'skill_tech': 'Mobile App', 'source': '/images/skills/mobile-app.png' },
    { 'skill_tech': 'Communication', 'source': '/images/skills/communication.png' },
    { 'skill_tech': 'Certificate', 'source': '/images/skills/certificate.jpg' }
  ];
  const projects = [
    { 'skill_tech': 'Frontend', 'source': '/images/skills/frontend.png' },
    { 'skill_tech': 'Backend', 'source': '/images/skills/backend.png' },
    { 'skill_tech': 'Mobile App', 'source': '/images/skills/mobile-app.png' },
    { 'skill_tech': 'Communication', 'source': '/images/skills/communication.png' },
    { 'skill_tech': 'Certificate', 'source': '/images/skills/certificate.jpg' }
  ];
  return (
    <div id="__next">
      <div id="root">
        <div className="Masthead_Masthead__AqKEv">
          <div className="Masthead_content__lswMP">
            <div className="Masthead_title__UKtcP">- 박현준 -<br />웹 개발자 포트폴리오</div>
            <hr className="Masthead_divider___SbfQ" />
            <div className="Masthead_description__VWTuB">1번째줄<br />2번째줄<br />3번째줄</div>
            <div className="Masthead_find-out-more__8C_Rn">더 알아보기 ↓</div>
          </div>
        </div>
        <Header menus={menus} />
        <article className="AboutMe_AboutMe__ysYj_" id="about-me">
          <div className="AboutMe_content__nt2Em">
            <div className="SectionTitle_SectionTitle__aqV31">
              <div style={sectionTitleStyle} className="SectionTitle_text__O7xJQ">ABOUT ME</div>
              <div className="SectionTitle_link-wrapper__VI81N"><img className="SectionTitle_link__WH0x2" src="./images/black-link.png" alt="" /></div>
            </div>
            <div className="AboutMe_basic-infos__RLZNU">
              {/* Render the Aboutme */}
              {Aboutme.map((information, index) => (
                <div key={index} className="AboutMe_basic-info-wrapper__p9kae">
                  <div className="AboutMe_basic-info__vpRfY">
                    <div className="AboutMe_icon-img-wrapper__eNduC"><img className="AboutMe_icon-img__xEpEm" src={information.image} alt="" /></div>
                    <div className="AboutMe_field__GeyWG">
                      <div className="AboutMe_field-label__IZxOZ">{information.label}</div>
                      <div className="AboutMe_field-value__Or_oj">{information.value}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="AboutMe_contact-description__u6x4F">* 외주 개발 또는 과외/레슨 문의는<br className="AboutMe_newline__SLvoN" />위 연락처/이메일로 부탁드립니다.</div>
            </div>
          </div>
        </article>

        <article className="Skills_Skills__NOlZH" id="skills">
          <div className="Skills_content__g0p1s">
            <div className="SectionTitle_SectionTitle__aqV31">
              <div style={sectionTitleStyle} className="SectionTitle_text__O7xJQ">SKILLS</div>
              <div className="SectionTitle_link-wrapper__VI81N"><img className="SectionTitle_link__WH0x2" src="./images/black-link.png" alt="" /></div>
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

        <article className="Archiving_Archiving__SyeSz" id="archiving">
          <div className="Archiving_content__qxspn">
            <div className="SectionTitle_SectionTitle__aqV31">
              <div style={sectionTitleStyle} className="SectionTitle_text__O7xJQ">ARCHIVING</div>
              <div className="SectionTitle_link-wrapper__VI81N"><img className="SectionTitle_link__WH0x2" src="/images/white-link.png" alt="" /></div>
            </div>
            <div className="Archiving_container__IK8rE"><a className="Archiving_git-hub___Dnvc" href="https://github.com/pakkyun0225/-vamos">
              <div className="Archiving_img-wrapper__AYHcD"><img className="Archiving_img__VxAEe" src="/images/archiving/git-hub.png" alt="" /></div>
              <div className="Archiving_url__pLmMb">https://github.com/pakkyun0225/-vamos</div>
              <div className="Archiving_description__2Z8C8">
                <p><b>소스 코드 저장소</b>입니다.</p>
                <ul>
                  <li>과거 프로젝트, 프로그램, 앱의 소스 코드</li>
                  <li>혼자서 코딩 연습을 위해 끄적이던 소스 코드</li>
                  <li>학부 시절 수강한 수업들의 코딩 과제 소스 코드</li>
                </ul>
              </div>
            </a><a className="Archiving_tistory__c4e1v" href="https://pakkyun.tistory.com">
                <div className="Archiving_img-wrapper__AYHcD"><img className="Archiving_img__VxAEe" src="/images/archiving/tistory.png" alt="" /></div>
                <div className="Archiving_url__pLmMb">pakkyun.tistory.com</div>
                <div className="Archiving_description__2Z8C8">
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
        <article className="Projects_Projects__E9SvD" id="projects">
          <div className="Projects_content__HRavM">
            <div className="SectionTitle_SectionTitle__aqV31">
              <div style={sectionTitleStyle} className="SectionTitle_text__O7xJQ">PROJECTS</div>
              <div className="SectionTitle_link-wrapper__VI81N"><img className="SectionTitle_link__WH0x2" src="/images/white-link.png" alt="" /></div>
            </div>
            {/* Render Project */}
            {projects.map((proj, index) => (
              <div key={index} className="Projects_projects__PvBb6">
                <div className="Projects_project__hHhvb">
                  <div className="Projects_title__0IuQ3">{proj.title}</div>
                  <div className="Projects_period__HDo5Z">{proj.date}</div>
                  <div className="Projects_info___utyZ">
                    <div className="Projects_img-carousel__e8hwy">
                      <div style={sectionTitleStyle} className="Projects_imgs__datEq">
                        <div className="Projects_img-wrapper__0b8Tt"><img className={proj.imgsrc} alt="" /></div>
                        <div className="Projects_img-wrapper__0b8Tt"><img className={proj.imgsrc} alt="" /></div>
                        <div className="Projects_img-wrapper__0b8Tt"><img className={proj.imgsrc} alt="" /></div>
                        <div className="Projects_img-wrapper__0b8Tt"><img className={proj.imgsrc} alt="" /></div>
                        <div className="Projects_img-wrapper__0b8Tt"><img className={proj.imgsrc} alt="" /></div>
                      </div>
                      <nav className="Projects_nav__Inoba">
                        <div className="Projects_prev__wS3_z"><img src="/images/arrow-left.svg" alt="" /></div>
                        <div className="Projects_page__zHIqO">1/8</div>
                        <div className="Projects_next__3RYWe"><img src="/images/arrow-right.svg" alt="" /></div>
                      </nav>
                    </div>
                    <div className="Projects_descriptions__2g3bi">
                      <div className="Projects_main-description__JVRu1">{proj.dsc}
                        <div className="Projects_show-readme-btn__v1p__">자세히 보기 ▶ README</div>
                      </div>
                      <div className="Projects_description___gCV_">
                        <div className="Projects_label__OLO6p">주요 기능</div>
                        <div className="Projects_value__B9RY_">{proj.func}</div>
                      </div>
                      <div className="Projects_description___gCV_">
                        <div className="Projects_label__OLO6p">GitHub</div>
                        <div className="Projects_value__B9RY_"><a className="Projects_url__5cSRT" href={proj.github}>{proj.github}</a></div>
                      </div>
                      <div className="Projects_description___gCV_">
                        <div className="Projects_label__OLO6p">URL</div>
                        <div className="Projects_value__B9RY_"><a className="Projects_url__5cSRT" href={proj.URL}>{proj.URL}</a></div>
                      </div>
                      <div className="Projects_description___gCV_">
                        <div className="Projects_label__OLO6p">{proj.techstack}</div>
                        <div className="Projects_value__B9RY_">{proj.tech}</div>
                      </div>
                      <div className="Projects_description___gCV_">
                        <div className="Projects_label__OLO6p">{proj.techstack}</div>
                        <div className="Projects_value__B9RY_">{proj.tech}</div>
                      </div>
                      <div className="Projects_description___gCV_">
                        <div className="Projects_label__OLO6p">{proj.techstack}</div>
                        <div className="Projects_value__B9RY_">{proj.tech}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article className="Career_Career__w0U0z" id="career">
          <div className="Career_content__6_8pM">
            <div className="SectionTitle_SectionTitle__aqV31">
              <div style={sectionTitleStyle} className="SectionTitle_text__O7xJQ" >CAREER</div>
              <div className="SectionTitle_link-wrapper__VI81N"><img className="SectionTitle_link__WH0x2" src="/images/black-link.png" alt="" /></div>
            </div>
            <div className="Career_companies__zP9qN">
              <div className="Career_company__I_V_1">
                <div className="Career_logo-container__otW3c">
                  <div className="Career_logo-wrapper__IRmTo"><img className="Career_logo__WgFXr" src="/images/career/opengallery.png" alt="" /></div>
                </div>
                <div className="Career_info__M8b0w">
                  <div className="Career_title__aXl4q">(주) 오픈갤러리</div>
                  <div className="Career_period__SLQR_">2019.08 - 현재</div>
                  <div className="Career_description__iZPxT">그림을 렌탈하려는 고객들과 그림을 그리는 작가들을 중개하는 <b>그림 렌탈 서비스 플랫폼</b>입니다.<br /><br />기본적으로는 <b>Django 기반의 풀 스택 웹 개발을 총괄 담당</b>하고 있으며, <b>신규 기술 스택(Next.js 등)</b>과 관련한 개발 및 교육까지 전담하고 있습니다. 또한, 주로 복잡하고 어려운 작업에 관한 <b>기술 검토를 통해 기획을 보조</b>하며, 동료 개발자의 작업에 대한 <b>코드 리뷰</b>나 신입 개발자의 <b>사수 역할</b>과 같은 기타 업무까지 함께 담당하고 있습니다.</div>
                  <ul className="Career_works__deS2P">
                    <h4 className="Career_works-title__uwkNU">▎ 백 오피스의 전반적인 관리 및 각종 기능 개발/기획</h4>
                    <h5 className="Career_works-period__ayMBF">2019년 하반기 ~ 현재</h5>
                    <li>고객 유입 흐름 파악을 위한 업무 프로세스 관련 데이터 대규모 연동 (Funnel)</li>
                    <li>그림 픽업/설치/철수/반납 일정의 관리를 위한 캘린더 페이지 기획 및 개발</li>
                    <li>외주 일정의 관리를 위한 외주 일정 관리 페이지 기획 및 개발</li>
                    <li>일정 방문 정보의 작성과 관리를 위한 페이지 기획 및 개발</li>
                    <li>초기 아트테크 시스템 개발 및 관련 추가 기획/개발 담당</li>
                    <li>작가 송금 관리 시스템 개발</li>
                    <li>발생주의 기반의 매출 분석 페이지 개발</li>
                    <li>수익률 분석을 위한 작품 분석 페이지 개발</li>
                    <li>고객의 유입률 등을 보여주는 통계 페이지 개발</li>
                    <li>고객 통계를 위한 UTM 파라미터 추적 기능 개발</li>
                    <li>전시 데이터 등록 및 관리 시스템 리뉴얼</li>
                    <li>Jira API 기반의 업무 관리 페이지 기획 및 개발</li>
                    <li>알림톡 및 문자메시지 발송 API 업체 이관 및 관련 개발</li>
                    <li>Iamport 모듈을 이용한 결제 기능 리팩토링</li>
                    <li>이미지 AWS S3 업로드 방식의 통일 및 최적화</li>
                    <li>오랫동안 유지보수되지 않은 페이지 및 기능 정리</li>
                    <li>자주 쓰이는 코드의 리팩토링 (EX. 페이지네이션)</li>
                    <li>Python, Django, Node.js 버전 업그레이드</li>
                    <h4 className="Career_works-title__uwkNU">▎ 개발 업무 외 기타 업무 담당</h4>
                    <h5 className="Career_works-period__ayMBF">2020년 중반기 ~ 현재</h5>
                    <li>기획자/개발자 채용 담당 (서류/면접 평가)</li>
                    <li>신입 개발자 사수 담당 (업무 교육/할당)</li>
                    <li>동료 개발자 코드 리뷰 (피드백/교육)</li>
                    <li>개발 관련 유용한 지식 발표 및 공유</li>
                    <li>IT팀 업무 관련 문서 총정리</li>
                    <li>개발자 인수인계 및 온보딩 문서 작성</li>
                    <h4 className="Career_works-title__uwkNU">▎ 대규모 서버 정리 작업 리드</h4>
                    <h5 className="Career_works-period__ayMBF">2020년 중반기 ~ 2021년 중반기</h5>
                    <li>대규모 서버 정리 작업 총괄 및 코드 리뷰</li>
                    <li>데이터베이스 마이그레이션 파일 정리</li>
                    <li>알림톡 및 네이버웍스 알림 관련 기능 정리 및 개선</li>
                    <li>로그인 및 회원가입 등의 인증 시스템 정리 및 개선</li>
                    <li>관리자 권한 관련 기능 정리 및 개선</li>
                    <li>불필요한 파일/코드 정리 및 코드 작성 방식 통일성 확보</li>
                    <h4 className="Career_works-title__uwkNU">▎ 서버 배포 라인 변경</h4>
                    <h5 className="Career_works-period__ayMBF">2021년 하반기</h5>
                    <li>기존 배포 라인 : AWS Elastic Beanstalk</li>
                    <li>신규 배포 라인 : AWS ECS (Docker 기반)</li>
                    <li>OS 독립적인 간편한 개발 환경 구축이 가능해짐</li>
                    <li>특정 기술의 독립적인 버전 업그레이드가 용이해짐</li>
                    <li>Next.js의 점진적 도입을 위한 기반 마련</li>
                    <h4 className="Career_works-title__uwkNU">▎ 작가 개인용 웹사이트 전체 리뉴얼 (Next.js)</h4>
                    <h5 className="Career_works-period__ayMBF">2022년 상반기</h5>
                    <li>Django 기반의 웹사이트를 Next.js 기반으로 재개발</li>
                    <li>React 기반의 Next.js 개발 환경 최초 구축</li>
                    <li>Next.js, Recoil, Sass, DRF 등 활용</li>
                    <li>신규 기술 스택 및 개발 환경 관련 내부 교육 진행</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="PageUpButton_PageUpButton__YZsBX PageUpButton_show__17G_A"><img className="PageUpButton_img__clyDT" src="/images/page-up.svg" alt="" /></div>
        <footer className="Footer_Footer__5wlgh">
          <div className="Footer_icons__sgt9s">
            <div className="Footer_icon-wrapper___O2A_ Footer_bg-white__mYFhV" title="GitHub"><img className="Footer_icon__Zvnct" src="/images/footer/git-hub.png" alt="" /></div>
            <div className="Footer_icon-wrapper___O2A_" title="Tistory"><img className="Footer_icon__Zvnct" src="/images/footer/tistory.png" alt="" /></div>
            <div className="Footer_icon-wrapper___O2A_" title="Instagram"><img className="Footer_icon__Zvnct" src="/images/footer/instagram.png" alt="" /></div>
            <div className="Footer_icon-wrapper___O2A_ Footer_bg-white__mYFhV" title="Facebook"><img className="Footer_icon__Zvnct" src="/images/footer/facebook.png" alt="" /></div>
          </div>
          <div className="Footer_copyright__RlJgA">© 2021. Choi Deok Gyeong. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
export default App;
