import './App.css';
import Header from "./component/main/Header";
import AboutMe from "./component/main/AboutMe";
import Skills from "./component/main/Skills";
import Archiving from "./component/main/Skills";
import Project from "./component/main/Skills";

function App() {
  const sectionTitleStyle = {
    color: '#000000',
    borderBottomColor: '#cccccc'
  };
  const menus = ['About Me', 'Skills', 'Archiving', 'Project', 'Career'];
  const Aboutme = [
    { 'image': './images/user-3-line.svg', 'label': '이름', 'value': '박현준' },
    { 'image': './images/calendar-line.svg', 'label': '생년월일', 'value': '96.02.25' },
    { 'image': './images/map-pin-line.svg', 'label': '주소지', 'value': '안산시 단원구' },
    { 'image': './images/smartphone-line.svg', 'label': '연락처', 'value': '010-3721-0225' },
    { 'image': './images/mail-line.svg', 'label': '이메일', 'value': 'oscarrr0225@gmail.com' }
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
    <body>
      <div id="__next">
        <div id="root">
        <div id="Header_Header__bkfyR"></div>
          <div class="Masthead_Masthead__AqKEv">
            <div class="Masthead_content__lswMP">
              <div class="Masthead_title__UKtcP">- 박현준 -<br />웹 개발자 포트폴리오</div>
              <hr class="Masthead_divider___SbfQ" />
              <div class="Masthead_description__VWTuB">1번째줄<br />2번째줄<br />3번째줄</div>
              <div class="Masthead_find-out-more__8C_Rn">더 알아보기 ↓</div>
            </div>
          </div>
          <div><Header menus = {menus} /></div>
          <article><AboutMe Aboutme = {Aboutme} /></article>
          <article><Skills skillTechStacks = {skillTechStacks} /></article>
          <article><Archiving/></article>
          <article><Project projects = {projects} /></article>
          <article class="Career_Career__w0U0z" id="career">
            <div class="Career_content__6_8pM">
              <div class="SectionTitle_SectionTitle__aqV31">
                <div style={sectionTitleStyle} class="SectionTitle_text__O7xJQ" >CAREER</div>
                <div class="SectionTitle_link-wrapper__VI81N"><img class="SectionTitle_link__WH0x2" src="/images/black-link.png" alt="" /></div>
              </div>
              <div class="Career_companies__zP9qN">
                <div class="Career_company__I_V_1">
                  <div class="Career_logo-container__otW3c">
                    <div class="Career_logo-wrapper__IRmTo"><img class="Career_logo__WgFXr" src="/images/career/opengallery.png" alt="" /></div>
                  </div>
                  <div class="Career_info__M8b0w">
                    <div class="Career_title__aXl4q">(주) 오픈갤러리</div>
                    <div class="Career_period__SLQR_">2019.08 - 현재</div>
                    <div class="Career_description__iZPxT">그림을 렌탈하려는 고객들과 그림을 그리는 작가들을 중개하는 <b>그림 렌탈 서비스 플랫폼</b>입니다.<br /><br />기본적으로는 <b>Django 기반의 풀 스택 웹 개발을 총괄 담당</b>하고 있으며, <b>신규 기술 스택(Next.js 등)</b>과 관련한 개발 및 교육까지 전담하고 있습니다. 또한, 주로 복잡하고 어려운 작업에 관한 <b>기술 검토를 통해 기획을 보조</b>하며, 동료 개발자의 작업에 대한 <b>코드 리뷰</b>나 신입 개발자의 <b>사수 역할</b>과 같은 기타 업무까지 함께 담당하고 있습니다.</div>
                    <ul class="Career_works__deS2P">
                      <h4 class="Career_works-title__uwkNU">▎ 백 오피스의 전반적인 관리 및 각종 기능 개발/기획</h4>
                      <h5 class="Career_works-period__ayMBF">2019년 하반기 ~ 현재</h5>
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
                      <h4 class="Career_works-title__uwkNU">▎ 개발 업무 외 기타 업무 담당</h4>
                      <h5 class="Career_works-period__ayMBF">2020년 중반기 ~ 현재</h5>
                      <li>기획자/개발자 채용 담당 (서류/면접 평가)</li>
                      <li>신입 개발자 사수 담당 (업무 교육/할당)</li>
                      <li>동료 개발자 코드 리뷰 (피드백/교육)</li>
                      <li>개발 관련 유용한 지식 발표 및 공유</li>
                      <li>IT팀 업무 관련 문서 총정리</li>
                      <li>개발자 인수인계 및 온보딩 문서 작성</li>
                      <h4 class="Career_works-title__uwkNU">▎ 대규모 서버 정리 작업 리드</h4>
                      <h5 class="Career_works-period__ayMBF">2020년 중반기 ~ 2021년 중반기</h5>
                      <li>대규모 서버 정리 작업 총괄 및 코드 리뷰</li>
                      <li>데이터베이스 마이그레이션 파일 정리</li>
                      <li>알림톡 및 네이버웍스 알림 관련 기능 정리 및 개선</li>
                      <li>로그인 및 회원가입 등의 인증 시스템 정리 및 개선</li>
                      <li>관리자 권한 관련 기능 정리 및 개선</li>
                      <li>불필요한 파일/코드 정리 및 코드 작성 방식 통일성 확보</li>
                      <h4 class="Career_works-title__uwkNU">▎ 서버 배포 라인 변경</h4>
                      <h5 class="Career_works-period__ayMBF">2021년 하반기</h5>
                      <li>기존 배포 라인 : AWS Elastic Beanstalk</li>
                      <li>신규 배포 라인 : AWS ECS (Docker 기반)</li>
                      <li>OS 독립적인 간편한 개발 환경 구축이 가능해짐</li>
                      <li>특정 기술의 독립적인 버전 업그레이드가 용이해짐</li>
                      <li>Next.js의 점진적 도입을 위한 기반 마련</li>
                      <h4 class="Career_works-title__uwkNU">▎ 작가 개인용 웹사이트 전체 리뉴얼 (Next.js)</h4>
                      <h5 class="Career_works-period__ayMBF">2022년 상반기</h5>
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
          <div class="PageUpButton_PageUpButton__YZsBX PageUpButton_show__17G_A"><img class="PageUpButton_img__clyDT" src="/images/page-up.svg" alt="" /></div>
          <footer class="Footer_Footer__5wlgh">
            <div class="Footer_icons__sgt9s">
              <div class="Footer_icon-wrapper___O2A_ Footer_bg-white__mYFhV" title="GitHub"><img class="Footer_icon__Zvnct" src="/images/footer/git-hub.png" alt="" /></div>
              <div class="Footer_icon-wrapper___O2A_" title="Tistory"><img class="Footer_icon__Zvnct" src="/images/footer/tistory.png" alt="" /></div>
              <div class="Footer_icon-wrapper___O2A_" title="Instagram"><img class="Footer_icon__Zvnct" src="/images/footer/instagram.png" alt="" /></div>
              <div class="Footer_icon-wrapper___O2A_ Footer_bg-white__mYFhV" title="Facebook"><img class="Footer_icon__Zvnct" src="/images/footer/facebook.png" alt="" /></div>
            </div>
            <div class="Footer_copyright__RlJgA">© 2021. Choi Deok Gyeong. All rights reserved.</div>
          </footer>
        </div>
      </div>
    </body>
  );
}
export default App;
