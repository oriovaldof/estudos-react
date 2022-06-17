import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/layout/Container/Container';
import Company from './components/pages/Company/Company';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';
import NewProject from './components/pages/NewProject/NewProject';
import Footer from './components/layout/Footer/Footer'
import Navbar from './components/layout/Navbar/Navbar'
import Projects from './components/pages/Projects/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/new-projects' element={<NewProject />} />
        </Routes>
      </Container>
     <Footer />
    </Router>
  );
}

export default App;
