import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: NonNullableFormBuilder,
    private auth :AuthService
  ){}
  

  logForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    pwd: ['', [Validators.required,Validators.minLength(6)]],
  });

  get fCon(){
    return this.logForm['controls'];
  }

  get email() {
    return this.logForm.get('email');
  }

  get password() {
    return this.logForm.get('pwd');
  }
  
  

  login(){
    
    const { email, pwd } = this.logForm.value;

    if (!this.logForm.valid || !email || !pwd) {
      return;
    }

    this.auth.login(email,pwd)
  }

  logout(){
    this.auth.logout();
  }
}
