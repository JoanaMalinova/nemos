import { Home } from './views/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Aside } from './components/navigation/aside navbar/Aside';
import './App.css';
import { useState, useEffect } from "react";
import { HeaderKeeper } from './components/header/header keeper/HeaderKeeper';


function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderKeeper />
      <Header scrollPosition={scrollPosition} />
      <main>
        <Home />
      </main>
      <Aside scrollPosition={scrollPosition} />
      <Footer />
    </>
  );
}

export default App;
