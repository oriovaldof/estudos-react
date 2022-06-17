import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from './components/layout/Container/Container';
import Company from './components/pages/Company/Company';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';
import NewProject from './components/pages/NewProject/NewProject';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/new-project">Novo Projeto</Link>
        <Link to="/company">Empresa</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/new-project' element={<NewProject />} />
        </Routes>
      </Container>
      <p>footer</p>
    </Router>
  );
}

export default App;
