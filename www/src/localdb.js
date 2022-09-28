import * as _ from 'lodash';
import { DateTime } from 'luxon';

function DataBase(name) {
  let db = localStorage.getItem(name);
  if (db) {
    db = JSON.parse(db);
  }
  else {
    db = {
      dbName: name,
      nextId: 1,
      data: {}
    }
  }


  let commit = () => {
    console.log("saving", JSON.stringify(db))
    localStorage.setItem(name, JSON.stringify(db));
  }

  let store = (item)=> {
    if (!item.id) {
      item.id = db.nextId;
      item.created = DateTime.now();
      db.nextId = db.nextId + 1;
    }
    item.modified = DateTime.now();
    db.data[item.id] = item;
  }

  let save = (item)=> {
    if (Array.isArray(item)) {
      _.forEach(item, store)
    }
    else {
      store(item);
    }
    commit();
  }

  let findAll = ()=>_.values(db.data);
  let get = (id)=>db.data[id];
  let remove = (item)=> {
    let id = item.id || item;
    db.data = _.omit(db.data, id);
    commit();
  }

  const obj = {
    name: name,
    save: save,
    remove: remove,
    get: get,
    findAll: findAll
  }
  return obj;
}


export default DataBase;
