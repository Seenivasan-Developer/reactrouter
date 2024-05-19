import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route, NavLink } from 'react-router-dom';
import { ProgrammingLanguage } from './Components/ProgrammingLanguage';
import { DataScience } from './Components/DataScience';
import { Webdevelopment } from './Components/Webdevelopment';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Cybersecurity } from './Components/Cybersecurity';
import { Database } from './Components/Database';
import { Softwaretesting } from './Components/Softwaretesting';

function App() {
  
  return (
    <>
    <Container>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React Router</Navbar.Brand>
          </Container>
      </Navbar>

      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/">Programming Languages</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/Datascience">Data Science</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/Webdevelopment">Web Development</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/Cybersecurity">Cybersecurity</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/Database">Database and Cloud Computing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/Softwaretesting">Software Testing and Automation</Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
      <Routes>
        <Route path="/" element={<ProgrammingLanguage />} />
        <Route path="/Datascience" element={<DataScience />} />
        <Route path="/Webdevelopment" element={<Webdevelopment />} />
        <Route path="/Cybersecurity" element={<Cybersecurity />} />
        <Route path="/Database" element={<Database />} />
        <Route path="/Softwaretesting" element={<Softwaretesting />} />
        </Routes>
       
    </>
  );
}

export default App;
