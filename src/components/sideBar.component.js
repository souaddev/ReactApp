import "../index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { Component } from "react";
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="center-page">
            <div className="sidebar">
                <div className="logobar"><div className="biblio"> BIBLIO</div><div className="theque">THEQUE</div></div>
                <div className="elements-bar">Partie de gestion :</div>
                <div className="element-bar">
                    <button><Link href="/student-list" className="link">
                    Gestion des étudiants
                    </Link></button>
                </div>
                <div className="element-bar">
                    <Link to="/book-list" className="link">
                    Gestion des livres
                    </Link>
                </div>
                <div className="element-bar">
                    <Link to={"/empreint-list"} className="link">
                    Gestion des empreintes
                    </Link>
                </div>
                <div className="elements-bar">Partie de statistique :</div>
                <div className="element-bar">Statistique générale</div>
                <div className="element-bar">Statistique detaillé</div>
            </div>
            <div className="navbar"></div>
            <div className="content">
               
            {/* <Router>
                <Route path="/student-list" component={StudentList} />
                <Route path="/book-list" component={BookList}/>
            </Router> */}
            </div>
           
        </div>
         );
    }
}
 
export default SideBar;