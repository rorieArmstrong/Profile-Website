import logo from './logo.svg';
import './App.css';
import Navbar  from './src/Navbar'
import About  from './src/About'
import Projects  from './src/Projects'
import Skills from './src/Skills'
import Testimonials  from './src/Testimonials'
import Contact from './src/Contact'


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
