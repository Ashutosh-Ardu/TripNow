import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {


  signIn: Boolean = window.isLoggedIn
  data:any;

  

  constructor(private router:Router,private fireauth : AngularFireAuth,private auth:AuthService){
    console.log(this.signIn)
    console.log(window.isLoggedIn)
    this.fireauth.currentUser.then((user) =>{
      console.log(user)
      this.data = user
    },err => {
      console.log(err.message)
    })
  }

  logOut(){
    this.auth.logout()
  }

}
