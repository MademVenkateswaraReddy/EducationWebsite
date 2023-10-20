import './App.css';
import {Header} from './components/common/heading/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './components/common/home/Home';
import { About } from './components/about/About';
import { CourseHome } from './components/allcourses/CourseHome';
import { Team } from './components/team/Team';
import { Price } from './components/pricing/Price';
import { Blog } from './components/blog/Blog';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/courses' element={<CourseHome />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/pricing' element={<Price />} />
          <Route exact path='/journal' element={<Blog />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
