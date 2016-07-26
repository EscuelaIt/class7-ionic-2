import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TasksService {

  path: string = "https://jsonplaceholder.typicode.com";

  constructor(
    private http: Http
  ) {
    
  }

  getAllTasks(){
    return new Promise((resolve, reject) => { 
      this.http.get(`${this.path}/todos`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error =>{
          reject(error);
        })
    });
  }

  getTask( idTask:number ){
    return new Promise((resolve, reject) => { 
      this.http.get(`${this.path}/todos/${idTask}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error =>{
          reject(error);
        })
    });
  }

  createTask( task:any ){
    return new Promise((resolve, reject) => { 
      this.http.post(`${this.path}/todos`, task)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error =>{
          reject(error);
        })
    });
  }

  editTask( task:any ){
    return new Promise((resolve, reject) => { 
      this.http.put(`${this.path}/todos/${task.id}`, task)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error =>{
          reject(error);
        })
    });
  }

  deleteTask( task:any ){
    return new Promise((resolve, reject) => { 
      this.http.delete(`${this.path}/todos/${task.id}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error =>{
          reject(error);
        })
    });
  }
}

