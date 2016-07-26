import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersService } from '../../providers/users/users';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [ UsersService ]
})
export class HomePage {

  users: any[];

  constructor(
    private navCtrl: NavController,
    private usersService: UsersService
  ) {
    this.loadUsers();
  }

  private loadUsers(){
    this.usersService.getAllUsers()
    .then(users =>{
      this.users = users;
    })
    .catch(error =>{
      console.log(error);
    })
  }
}
