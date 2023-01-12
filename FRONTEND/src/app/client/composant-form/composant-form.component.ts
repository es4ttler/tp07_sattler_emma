import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from '../../core/models/Client';

@Component({
  selector: 'app-composant-form',
  templateUrl: './composant-form.component.html',
  styleUrls: ['./composant-form.component.css']
})
export class ComposantFormComponent  {

  client:Client=new Client();
  isValid=false;
  snackBar: MatSnackBar;

  constructor(snackBar:MatSnackBar){
    this.snackBar=snackBar;
  }


  verifyFormData(){
    if(this.client.password != this.client.passwordConfirm && !this.client.isEmpty()){
      this.snackBar.open('Le mot de passe et la confirmation de mot de passe ne sont pas identiques',"",{
        duration:3000
      })
      return
    }
    this.isValid = true    
  }

}
