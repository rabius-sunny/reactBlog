import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePostList from './components/Posts/HomePostList'
import BasicPostList from './components/Posts/BasicPostList'
import SystemPostList from './components/Posts/SystemPostList'
import WebPostList from './components/Posts/WebPostList'
import About from './components/Posts/About'
import Create from './components/Create'
import './App.css'
function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="App">
        <Navbar dark expand="md" className="sticky-top navBar">
          <NavbarBrand href="/"> <span className="logo">T</span> Tech Talk</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/"><NavLink>Home</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Category
              </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/basic"><DropdownItem>  Basic Computing </DropdownItem></Link>
                  <Link to="/system"> <DropdownItem> System </DropdownItem></Link>
                  <Link to="/web"> <DropdownItem> Web </DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/about"><NavLink>About</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/create"><NavLink>Create</NavLink></Link>
              </NavItem>
            </Nav>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ marginRight: '10px' }} />
              <button className="btn btn-outline-light">Search</button>
            </form>
          </Collapse>
        </Navbar>

        {/* <div className="container"> */}

          <Switch>
            <Route path="/" exact>
              <HomePostList />
            </Route>
            <Route path="/basic">
              <BasicPostList />
            </Route>
            <Route path="/system">
              <SystemPostList />
            </Route>
            <Route path="/web">
              <WebPostList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
