import { Component } from '@angular/core';

export class User {
  constructor(public email: string, public password: string) { }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor() { }

  user: User = new User('', '')

  signUp() {
    console.log(this.user)
  }

  //функция для просмотра пароля
  viewPass() {
    let passType = document.getElementById('password')?.getAttribute('type');
    let passElement = document.getElementById('password');

    if (passType == 'password') {
      passElement?.setAttribute('type', 'text');
    }
    else {
      passElement?.setAttribute('type', 'password')
    }
  }




}
