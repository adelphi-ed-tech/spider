import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
import { DateTime } from 'luxon';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from "react-router-dom";
import { MapperForm } from './Mapper';


import {RosterList, RosterForm} from "./Roster"
import Map from "./res/map.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
      <Router>
        <div className="App container">
          <TopNav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/roster" element={<RosterForm />} />
            <Route exact path="/roster/:id" element={<RosterForm />} />
            <Route exact path="/mapper" element={<MapperForm />} />
          </Routes>
        </div>
      </Router>
    );
}


function Home() {
  const now = DateTime.now();

  return (
    <div className="Home">
      <h1>Welcome to Spider Conversations</h1>

      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Roster List</h4>
              <RosterList />
              <Link className="btn btn-primary" to="/roster">New Roster</Link>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Conversations</h4>
              <Link className="" to="/mapper">New Discussion</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


function About() {

  return (
    <div className="About">
      <h1>About Spider Conversations</h1>
      <p>
        Eligendi cumque eum quasi sunt a maxime. Et accusamus eius aut nostrum
        modi. Tempora quia placeat sint iste illo. Et sit sint eos voluptas
        officiis odit fugit. Consectetur et vel quia aut aliquid deserunt.
      </p>
      <p>
        Id consequuntur quia magnam. Sit recusandae rem nesciunt blanditiis odio
        nulla. Doloribus modi natus quia eaque eum. Beatae repudiandae cum
        corporis. Et enim qui inventore sit. Quae et quisquam molestiae vero
        recusandae accusantium.
      </p>
      <p>
        Cumque architecto praesentium ut quod sed totam quo voluptatem. Alias sit
        quia magnam voluptatem totam. Earum porro est eos et eum rerum voluptatem
        corporis. Voluptates consequatur rerum quia non.
      </p>
      <p>
        Et autem harum eligendi dolorum. Dolore ipsum dignissimos quibusdam.
        Aperiam maxime non odio. Repudiandae repudiandae voluptas vel nam libero
        delectus accusamus ea. Voluptatem quia et omnis deleniti voluptatem sit.
        Fugit totam voluptas veniam consequatur.
      </p>
      <p>
        Quia magnam sit eum eum voluptas deleniti. Beatae ut ipsam dicta. Harum
        labore qui et vel commodi odit et.
      </p>

    </div>
  )
}

function Contact(props) {

  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <p>
        <strong>Adelphi MIXI: Manhattan Institute for Stem and the Imangination</strong><br />
        75 Varick Street, New York, NY 10013
      </p>
      <img src={Map} alt="map of Manhattan, corner of Canal Street and Varick Street" />
    </div>
  )
}



function TopNav (props) {
  return (
    <nav className="navbar navbar-expand-md container navbar-light">
      <Link to="/" className="navbar-brand">Home</Link>

      <button className="navbar-toggler"
        type="button" data-toggle="collapse"
        data-target="#TopMenu" aria-controls="TopMenu" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div>
        <div id="TopMenu" className="collapse navbar-collapse m-0 p-0">
          <ul className="TopNav navbar-nav m-0 p-0">
            <li className="nav-item mb-0 pb-0">
              <NavLink className="nav-link btn btn-link font-weight-bold" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item mb-0 pb-0">
              <NavLink className="nav-link btn btn-link font-weight-bold" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default App;
