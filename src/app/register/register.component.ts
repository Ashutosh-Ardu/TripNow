import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private fb: NonNullableFormBuilder
  ){}

  regForm = this.fb.group({
    email: ['',[Validators.email,Validators.required]],
    pwd: ['',[Validators.required,Validators.minLength(6)]],
    cpwd: ['',[Validators.required,Validators.minLength(6)]],
  })

  get fCon(){
    return this.regForm['controls'];
  }

  onSubmit(){
    console.log(this.regForm);
  }
}
