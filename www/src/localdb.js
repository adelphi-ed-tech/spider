import * as _ from 'lodash';
import { DateTime } from 'luxon';

function DataBase(name) {
  let data = localStorage.getItem(name) || {};
  data = JSON.parse(data);
  let store = (item)=> {
    if (!item.id) {
      item.id = _.uuid();
      item.created = DateTime.now();
    }
    item.modified = DateTime.now();
    data[item.id] = item;
  }

  let save = (item)=> {
    if (Array.isArray(item)) {
      _.forEach(item, store)
    }
    else {
      store(item);
    }
    localStorage.setItem(name, JSON.stringify(data))
  }
  let get = (id)=>data[id];
  let delete = (item)=> {
    let id = item.id || item;
    data = _.omit(data, id);
    localStorage.setItem(name, JSON.stringify(data))
  }

  const db = {
    name: name,
    items: data,
    save: save,
    delete: delete
  }
  return db;
}


export default DataBase;
