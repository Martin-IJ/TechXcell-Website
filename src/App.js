import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Statistics from './components/Statistics';
import WhyPage from './components/WhyPage';
import Prototype from './components/Prototype';
import HowPage from './components/HowPage';
import Team from './components/Team';
import Packages from './components/Packages';

function App() {
  return (
    <div className="bg-main-color">
      <Navbar />
      <Banner />
      <About />
      <Statistics />
      <WhyPage />
      <Prototype />
      <HowPage />
      <Team />
      <Packages />
    </div>
  );
}

export default App;
