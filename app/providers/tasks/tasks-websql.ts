import { Injectable } from '@angular/core';
import { Storage, SqlStorage } from 'ionic-angular';


@Injectable()
export class TasksService {

  tasks: Storage;

  constructor() {
    this.tasks = new Storage(SqlStorage, {name: 'dbname'});
  }

  createTable(){
    let sql = "CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT,title VARCHAR(32), completed INTEGER)";
    this.tasks.query(sql)
    .then(data =>{
      console.log(data);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  createTask(task:any){
    let sql = `INSERT INTO tasks(title, completed) values("${task.title}","${task.completed}")`;
    this.tasks.query( sql )
    .then(data =>{
      console.log(data);
    })
    .catch(error=>{
      console.log(error)
    })
  }

  getTasks(){
    let sql =  `SELECT * from tasks`;
    return this.tasks.query( sql )
    .then(response =>{
      let data = [];
      for (let index = 0; index < response.res.rows.length; index++) {
        data.push({
          id: response.res.rows[index].id,
          title: response.res.rows[index].title,
          completed: response.res.rows[index].completed == "true" ? true : false
        });
      }
      return Promise.resolve(data);
    });
  }
}

