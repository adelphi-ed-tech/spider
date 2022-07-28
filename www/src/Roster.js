import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import * as _ from 'lodash';
import DataBase from "./localdb"

function ListRosters(props) {

}

const blankRoster = {
  id: null,
  roster: "",
  participants: ""
}

function RosterForm(props) {
  const [roster, setRoster] = useState(blankRoster);
  const [db, setDB] = useState({});


  const handleChange = (e)=> {
    let key = e.target.name || e.target.id;
    roster[key] = e.target.value;
    setRoster(roster)
  }


  const save = ()=> {
    db.save(roster);
  }

  const loadDatabase = ()=> {
    setDB(DataBase("rosters"));
  }
  useEffect(loadDatabase, [false]);


  if (db === null) {
    return <p>Loading...</p>
  }


  return (
    <div className="Roster">
      <h1>Roster Form</h1>
      <form className="RosterForm">
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
            <button className="btn btn-primary" type="button" onClick={db.save}>Save</button>
          </div>
      </form>
    </div>
  )
}

export {ListRosters, RosterForm};
