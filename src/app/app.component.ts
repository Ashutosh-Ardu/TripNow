import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit{
  title = 'travel';

  constructor(
    private store: AuthService
  ){}
  
  ngOnInit(): void {
    localStorage.setItem("paid","false")
    localStorage.setItem('isLoggedIn','false') 
    window.isLoggedIn = false
  }
}
