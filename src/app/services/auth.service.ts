import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth : AngularFireAuth,
    private router: Router,
  ) {}

  // login method
  login(email: string,password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(() => {
      localStorage.setItem('isLoggedIn','true')
      window.isLoggedIn = true

      this.router.navigate(['/booking'])
    },err => {
      // alert(err.message)
      console.log(err.code)
      let t = err.code
      if(t === "auth/email-already-in-use") alert("Email Already Exists")
      if(t === "auth/invalid-credential") alert("Invalid Credentials")
      if(t === "auth/invalid-password") alert("Password should have minimum length: 6")
      this.router.navigate(['/login'])
    })
  }

  // register method

  register(email:string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(() => {
      alert('Successful Login')
      this.router.navigate(['/login'])
    },err => {
      // alert(err.message)
      console.log(err.code)
      let t = err.code
      if(t === "auth/email-already-in-use") alert("Email Already Exists")
        if(t === "auth/invalid-credential") alert("Invalid Credentials")
        if(t === "auth/invalid-password") alert("Password should have minimum length: 6")
      this.router.navigate(['/login'])
    })
  }

  // signout method
  logout(){
    this.fireauth.signOut().then(() => {
      localStorage.setItem('isLoggedIn','false')
      window.isLoggedIn = false
      alert('Session Logged Out!!')
      this.router.navigate(['/login'])
    },err => {
      alert(err.message)
    })
  }
}
