import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Prolang } from './Prolang';
import { DataScience } from './DataScience';
import { Webdevelopment } from './Webdevelopment';

function App() {
  return (
    <>
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
      </Nav>
      <Routes>
        <Route path="/" element={<Prolang />} />
        <Route path="/Datascience" element={<DataScience />} />
        <Route path="/Webdevelopment" element={<Webdevelopment />} />
        </Routes>
    </>
  );
}

export default App;
