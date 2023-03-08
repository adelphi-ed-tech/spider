import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import * as _ from 'lodash';
import DataBase from "./localdb"



function MapperForm (props)
{
  const [nodes, setNodes] = useState([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");


  const addNode = (e)=> {
    // add the rest of the fields:
    // from, to, timestamp
    //then add the node at the end of the list
    e.preventDefault()
    let node = {

    }
    console.log("adding node")
  }




  return (

    <div className="mapper">
        <h1>Discussion Mapper</h1>
          <form className="mapperForm" onSubmit={addNode}>
             <div className="mb-3">
                <label htmlFor="mapper" className="form-label">Speaker Name:</label>
                <input id="name"
                       type="text"
                       className="form-control"
                       value={name}
                       onChange={e=>setName(e.value)}
                       placeholder="Type the speaker's name"/>
            </div>

            <div className="mb-3">
                <label htmlFor="mapper" className="form-label">Response Type Shortcut:</label>
                <input id="code"
                    type="text"
                    className="form-control"
                    onChange={e=>setCode(e.value)}
                    placeholder="Type the shortcut"/>
            </div>

            <div className="mb-3">
                <button className="btn btn-primary" type="button">Save</button>
            </div>
          </form>
    </div>



  )
}

export {MapperForm};
