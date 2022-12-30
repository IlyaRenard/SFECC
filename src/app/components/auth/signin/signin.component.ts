import { Component, OnInit } from '@angular/core';

export class User {
  constructor(public email: string, public password: string) { }
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {


  user: User = new User('', '')

  signIn() {
    console.log(this.user)
  }

}
