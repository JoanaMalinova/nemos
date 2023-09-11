import { Home } from './views/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
