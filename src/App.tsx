import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <Header />
      <main className='bg-white text-gray-800'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/case-studies' element={<CaseStudies />} />
        </Routes>
      </main>
      <Footer />
      <Toaster richColors />
    </Router>
  );
}

export default App;
