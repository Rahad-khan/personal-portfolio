import './App.css';
import Contact from './components/Contcat/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroArea from './components/HeroArea/HeroArea';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Header></Header>
      <HeroArea></HeroArea>
      <section>
        <Projects></Projects>
      </section>
      <section>
        <Contact></Contact>
      </section>
      <Footer />
    </div>
  );
}

export default App;
