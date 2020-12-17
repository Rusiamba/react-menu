import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './Home';
import DriftPage from './DriftPage';
import TAPage from './TAPage';
import ForzaPage from './ForzaPage';
import '../App.css';

export default function Menu() {
    return (
        <div>
            <Router>
                <div>
                    <nav className="menu">
                        <a className="menu__item">
                            <Link to="/">Главная</Link>
                        </a>
                        <a className="menu__item">
                            <Link to="/drift">Дрифт-такси</Link>
                        </a>
                        <a className="menu__item">
                            <Link to="/timeattack">TIME ATTACK</Link>
                        </a>
                        <a className="menu__item">
                            <Link to="/forza">FORZA KARTING</Link>
                        </a>
                    </nav>
                    <Switch>
                        <Route path="/drift">
                          <DriftPage />
                        </Route>
                        <Route path="/timeattack">
                          <TAPage />
                        </Route>
                        <Route path="/forza">
                            <ForzaPage />
                        </Route>
                        <Route path="/">
                          <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
