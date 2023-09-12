import { Home } from './views/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Aside } from './components/navigation/aside navbar/Aside';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Aside />
      <Footer />
    </>
  );
}

export default App;
