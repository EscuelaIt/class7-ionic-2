import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TasksService } from '../../providers/tasks/tasks-websql';

/*
  Generated class for the TasksPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tasks/tasks.html',
  providers: [ TasksService ]
})
export class TasksPage {

  tasks: any[] = [];

  constructor(
    private nav: NavController,
    private taskServices: TasksService
  ) {
    this.taskServices.createTable();
    this.loadTasks();
  }

  private loadTasks(){
    this.taskServices.getTasks()
    .then(data=>{
      this.tasks = data;
    });
  }

  post(){
    let task = {
      title: 'Nuevo',
      completed: false
    }
    this.tasks.push( task );
    this.taskServices.createTask( task );
  }

  /*
  Version LOCAL
  post(){
    let task = {
      title: 'Nuevo',
      completed: false
    }
    this.tasks.push( task );
    this.taskServices.saveTasks( this.tasks );
  }

  put(task){
    setTimeout(()=>{
      this.taskServices.saveTasks( this.tasks );
    },1)
  }

  delete(task){
    let index = this.tasks.indexOf(task);
    this.tasks.splice( index, 1 );
    this.taskServices.saveTasks( this.tasks );
  }
  */

  /*
  Version REST
  get(){
    this.taskServices.getTask( 2 )
    .then(task =>{
      console.log(task);
    });
  }
  

  post(){
    let task = {
      title: 'Nuevo',
      completed: false
    }
    this.taskServices.createTask( task )
    .then(task =>{
      this.tasks.unshift( task );
    });
  }

  put(task){
    setTimeout(()=>{
      this.taskServices.editTask( task )
      .then(task =>{
        console.log( task );
      });
    },1)
    
  }

  delete(task){
    this.taskServices.deleteTask( task )
    .then(() =>{
      let index = this.tasks.indexOf(task);
      this.tasks.splice( index, 1 );
    });
  }
  */

}
