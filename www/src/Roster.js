import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import * as _ from 'lodash';
import { Link, useParams } from "react-router-dom";

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

function Roster() {
  return {
    id: null,
    roster: "",
    participants: ""
  }
}

function RosterForm(props) {
  const [roster, setRoster] = useState(Roster());
  const [db, setDB] = useState(null);
  let { id } = useParams();


  const loadRoster = ()=> {
    if (id && db) {
      console.log("loading roster:", id);
      let x = db.get(id);
      console.log("loaded", x);
      setRoster(x);
    }
  }
  const loadDB = ()=>{setDB(DataBase("rosters"))}
  useEffect(loadDB, [false]);
  useEffect(loadRoster, [db]);

  const handleChange = (e)=> {
    const key = e.target.name || e.target.id;
    const val = e.target.value;
    const updatedRoster = { ...roster, [key]: val };
    setRoster(updatedRoster);
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
                   placeholder="roster name"
                   className="form-control"
                   value={roster.roster}
                   onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="participants" className="form-label">Roster</label>
            <textarea id="participants"
                      value={roster.participants}
                      className="form-control"
                      rows="10"
                      placeholder="type or paster names here"
                      onChange={handleChange} />
          </div>

          <div className="mb-3">
            <button className="btn btn-primary" type="button" onClick={handleSubmit}>Save</button>
          </div>
      </form>
    </div>
  )
}

export {RosterList, RosterForm};
