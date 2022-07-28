import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import * as _ from 'lodash';
import DataBase from "./localdb"



function MapperForm (props) 
{
  return (

    <div className="mapper">
        <h1>Discussion Mapper</h1>
          <form className="mapperForm">
    
             <div className="mb-3">
                <label htmlFor="mapper" className="form-label">Speaker Name:</label>
                <input id="Speaker Name"
                       type="text"
                       className="form-control"
                       placeholder="Type the speaker's name"/>
            </div>

            <div className="mb-3">
                <label htmlFor="mapper" className="form-label">Response Type Shortcut:</label>
                <input id="Response Type Shortcut"
                    type="text"
                    className="form-control"
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
