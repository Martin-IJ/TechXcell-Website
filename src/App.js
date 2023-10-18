import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Statistics from './components/Statistics';
import WhyPage from './components/WhyPage';

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <About />
      <Statistics />
      <WhyPage />
    </div>
  );
}

export default App;
