import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import * as _ from 'lodash';
import { Link } from "react-router-dom";



import DataBase from "./localdb"

function RosterList(props) {

  const db = DataBase("rosters");
  const rosters = db.findAll()
  const Row = (roster)=>{
    return (
      <li key={roster.id}><Link to={`/roster/${roster.id}`}>{roster.roster}</Link></li>
    )
  }

  const items = _.map(rosters, Row)
  return (
    <ul className="RosterList list-unstyled">
      {items}
    </ul>
  )

}

function Roster()  {
  return {
    id: null,
    roster: "",
    participants: ""
  }
}

function RosterForm(props) {
  const [roster, setRoster] = useState(Roster());
  const [db, setDB] = useState({});


  const loadDatabase = ()=> {
    setDB(DataBase("rosters"));
    const urlId = props.match.params.id;
    console.log(urlId);
    
  }
  useEffect(loadDatabase, [false]);



  const handleChange = (e)=> {
    let key = e.target.name || e.target.id;
    roster[key] = e.target.value;
    setRoster(roster)
  }


  const handleSubmit = (e)=> {
    e.preventDefault();
    db.save(roster);
  }

  if (db === null) {
    return <p>Loading...</p>
  }


  return (
    <div className="Roster">
      <h1>Roster Form</h1>
      <form className="RosterForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="roster" className="form-label">Name of Roster</label>
            <input id="roster"
                   type="text"
                   className="form-control"
                   value={roster.rosterName}
                   onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="roster" className="form-label">Roster</label>
            <textarea id="participants"
                      className="form-control"
                      rows="10"
                      placeholder="type or paster names here"
                      onChange={handleChange}>{roster.rosterName}</textarea>
          </div>

          <div className="mb-3">
            <button className="btn btn-primary" type="button" onClick={handleSubmit}>Save</button>
          </div>
      </form>
    </div>
  )
}

export {RosterList, RosterForm};
