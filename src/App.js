import './App.css';
import HeadTitile from '../src/HeadTitle/HeadTitle.js'
import FullView from './Achievement/Stacker/FullView';
import Education from './Education/Education';
import GetInTouch from './Get in Touch/GetInTouch';
import Skills from './Skill/Skills';
import ReachMe from './ReachMe/ReachMe';
import Stacker from './Achievement/Stacker/Stacker';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Projects from './projects/Projects';
AOS.init();
function App() {
  const [imagLink, setImageLink] = useState();
  return (
    <div className="App">
      <div className='max-w-7xl mx-auto px-5' >
        <HeadTitile></HeadTitile>
        <Stacker setImageLink={setImageLink}></Stacker>
        <FullView imagLink={imagLink}></FullView>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <ReachMe></ReachMe>
      </div>
      <GetInTouch></GetInTouch>
    </div>
  );
}

export default App;
