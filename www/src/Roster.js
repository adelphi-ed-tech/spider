import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import * as _ from 'lodash';
import DataBase from "./localdb"

function ListRosters(props) {

}

const blankRoster = {
  id: null,
  rosterName: "",
  participants: ""
}

function RosterForm(props) {
  const [roster, setRoster] = useState(blankRoster);


  const handleChange = (e)=> {
    let key = e.target.name || e.target.id;
    roster[key] = e.target.value;
    setRoster(roster)
  }


  let db = null;
  const loadDatabase = ()=> {
    db = DataBase("rosters")
  }
  useEffect(loadDatabase);



  return (
    <form className="RosterForm">
      <div className="Roster input-group mb-3">
        <div className="mb-3">
          <label for="roster" className="form-label">Name of Roster</label>
          <input id="roster"
                 type="text"
                 className="form-control"
                 value={roster.rosterName}
                 onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label for="roster" className="form-label">Roster</label>
          <textarea id="participants"
                    className="form-control"
                    placeholder="type or paster names here"
                    onChange={handleChange}>{roster.rosterName}</textarea>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" onClick={db.save} />
        </div>
      </div>
    </form>
  )
}

export {ListRosters, RosterForm};
