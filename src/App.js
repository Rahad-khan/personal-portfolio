import './App.css';
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
    </div>
  );
}

export default App;
