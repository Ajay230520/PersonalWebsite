
import styles from './App.module.css';
import Hero from './components/hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Navbar  from './components/Navbar/Navbar';

function App() {
  



  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About />
      <Experience />
      
     
    </div>
  );
}

export default App;
