import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/core/services/LoginService/login.service';

@Component({
  selector: 'app-composant-login',
  templateUrl: './composant-login.component.html',
  styleUrls: ['./composant-login.component.css']
})
export class ComposantLoginComponent {

  loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  isConnected = false

  @Output() login = new EventEmitter<string>();
  constructor(private loginService: LoginService) { }

  onSubmit() {
    console.log('debut submit', this.loginForm.value.login, this.loginForm.value.password);
    this.loginService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe(
      (data) => {
        this.isConnected = true;
        console.log('loginComponent onSubmit',data['login']);
        this.login.emit(data['login']);
      }
    );
  }

}
