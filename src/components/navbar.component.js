import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <header className="App-header">
        <Navbar expand="lg" bg="secondary" variant="dark" sticky="top">
        <Navbar.Brand href="#home">
        <div style={{fontSize:20,fontWeight:700,color:"#fcb110"}}> <img
        alt="image"
        src="https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
     BIBLIOTHEQUE</div> 
    </Navbar.Brand>
          <Container>

            <Nav className="justify-content-end">
          
              <Nav>
              <button class="btn btn-outline-warning" type="button">
              <Link to={"/create-student"} className="nav-link">
                  Ajouter_Etudiant
                </Link>
              </button>
               
              </Nav>

              <Nav>
              <button class="btn btn-outline-warning" type="button"><Link to={"/create-book"} className="nav-link">
                  Ajouter_livre
                </Link></button>
                
              </Nav>
              <Nav>
              <Nav>
              <button class="btn btn-outline-warning" type="button"> <Link to={"/create-empreint"} className="nav-link">
                  Ajouter_Empreinte
                </Link></button>
               
              </Nav>
              <button class="btn btn-outline-warning" type="button"> <Link to={"/student-list"} className="nav-link">
                 Liste_Etudiants
                </Link></button>
               
              </Nav>
              <Nav>
              <button class="btn btn-outline-warning" type="button"><Link to={"/book-list"} className="nav-link">
                  Liste_livres
                </Link></button>
                
              </Nav>
              <Nav>
              <button class="btn btn-outline-warning" type="button">
              <Link to={"/empreint-list"} className="nav-link">
                  Listes_Empreintes
                </Link>
              </button>
               
              </Nav>
              {/* <Nav>
                <Link to={"/login"} className="nav-link">
                 Login
                </Link>
              </Nav> */}
                             <Nav>
<button class="btn btn-outline-warning" type="button"> <Link to={"/static"} className="nav-link">
                  Statistique 
                </Link></button>
               </Nav>
<Nav>
<button class="btn btn-outline-warning" type="button"> <Link to={"/login"} className="nav-link">
                  Déconnexion
                </Link></button>
               </Nav>

            </Nav>

          </Container>
        </Navbar>
      </header>

            </div>
        );
    }
}
 
export default NavBar;