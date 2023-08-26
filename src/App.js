import './styles/App.css';
import Header from "./component/main/Header";
import AboutMe from "./component/main/AboutMe";
import SkillsSection from "./component/main/Skills";
import Archiving from "./component/main/Archiving";
import Project from "./component/main/Project";
import Career from './component/main/Career';
import Footer from './component/main/Footer';

function App() {
  const menus = ['About Me', 'Skills', 'Archiving', 'Project', 'Career'];
  const Aboutme = [
    { image: './images/user-3-line.svg', label: '이름', 'value': '박현준' },
    { image: './images/calendar-line.svg', label: '생년월일', 'value': '96.02.25' },
    { image: './images/map-pin-line.svg', label: '주소지', 'value': '안산시 단원구' },
    { image: './images/smartphone-line.svg', label: '연락처', 'value': '010-3721-0225' },
    { image: './images/mail-line.svg', label: '이메일', 'value': 'oscarrr0225@gmail.com' }
  ];
  const skillsData = [
    { title: 'Frontend', imgSrc: './images/skills/frontend.png' },
    { title: 'Backend', imgSrc: './images/skills/backend.png' },
    { title: 'Mobile App', imgSrc: './images/skills/mobile-app.png' },
    { title: 'Communication', imgSrc: './images/skills/communication.png' },
    { title: 'Certificate', imgSrc: './images/skills/certificate.jpg' }
  ];
  const projects = [
    { name: '피파온라인4', date: '2017.03.04', imgsrc: ["./images/project/fifa/1.jpg","./images/project/fifa/2.jpg","./images/project/fifa/3.jpg"], dsc:'ea sports its in the game', func:'축구', github:'https://github.com/pakkyun0225/-vamos', techstack:['Frontend', 'Backend', 'Database'], tech:['Next.js, Recoil, TypeScript, Sass, PostCSS, Tailwind CSS', 'Firebase Authentication', 'Firebase Realtime Database']},
    { name: '리그오브레전드', date: '2015.07.16', imgsrc: ["./images/project/lol/1.jpg","./images/project/lol/2.jpg","./images/project/lol/3.jpg"], dsc:'소환사의 협곡에 오신 것을 환영합니다.', func:'롤', github:'https://github.com/pakkyun0225/-vamos', techstack:['Frontend', 'Backend', 'Database'], tech:['Next.js, Recoil, TypeScript, Sass, PostCSS, Tailwind CSS', 'Firebase Authentication', 'Firebase Realtime Database'] },
    { name: '카카오톡', date: '2011.03.03', imgsrc: ["./images/project/kakao/1.png","./images/project/kakao/2.png","./images/project/kakao/3.jpg"], dsc:'카카오톡은 광고를 넣을만큼 돈이 궁하지 않습니다', func:'메신저', github:'https://github.com/pakkyun0225/-vamos', techstack:['Frontend', 'Backend', 'Database'], tech:['Next.js, Recoil, TypeScript, Sass, PostCSS, Tailwind CSS', 'Firebase Authentication', 'Firebase Realtime Database'] },
  ];
  const career = [
    { title: '경력1', period: '경력기간1', logosrc: ["./images/career/1.png"], dsc:'경력소개1', works: ['주요업무1', '주요업무2', '주요업무3'], detail:['주요업무1 detail', '주요업무2 detail', '주요업무3 detail']},
    { title: '경력2', period: '경력기간2', logosrc: ["./images/career/2.png"], dsc:'경력소개2', works: ['주요업무1', '주요업무2', '주요업무3'], detail:['주요업무1 detail', '주요업무2 detail', '주요업무3 detail']},
    { title: '경력3', period: '경력기간3', logosrc: ["./images/career/3.png"], dsc:'경력소개3', works: ['주요업무1', '주요업무2', '주요업무3'], detail:['주요업무1 detail', '주요업무2 detail', '주요업무3 detail']}
  ];
  return (
    <body>
      <div id="__next">
        <div id="root">
          <div id="Header_Header"></div>
          <div class="Masthead_Masthead">
            <div class="Masthead_content">
              <div class="Masthead_title">- 박현준 -<br />웹 개발자 포트폴리오</div>
              <hr class="Masthead_divider" />
              <div class="Masthead_description">1번째줄<br />2번째줄<br />3번째줄</div>
              <div class="Masthead_find-out-more">더 알아보기 ↓</div>
            </div>
          </div>
          <Header menus={menus} />
          <AboutMe Aboutme={Aboutme} />
          <SkillsSection skillsData={skillsData} />
          <Archiving />
          <Project projects={projects} />
          <Career career={career} />
          <div class="PageUpButton_PageUpButton PageUpButton_show"><img class="PageUpButton_img" src="./images/up.svg" alt="" /></div>
          <Footer />
        </div>
      </div>
    </body>
  );
}
export default App;
