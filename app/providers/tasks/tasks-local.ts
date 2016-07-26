import { Injectable } from '@angular/core';
import { Storage, LocalStorage } from 'ionic-angular';


@Injectable()
export class TasksService {

  tasks: Storage;

  constructor() {
    this.tasks = new Storage(LocalStorage);
  }

  saveTasks(tasks){
    this.tasks.set('tasks', JSON.stringify(tasks));
  }

  getTasks(){
    return this.tasks.get('tasks');
  }
}

