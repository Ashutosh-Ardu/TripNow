import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc,deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{


  signIn: Boolean = window.isLoggedIn
  name: string;
  // for storing user session's data
  data:any;

  // for storing booking details
  filteredBoxes: any[] = [];
  wishListBoxes: any[] = [];
  len: number = 0
  isLoggedIn = window.isLoggedIn
  
  

  constructor(private router:Router,private fireauth : AngularFireAuth,private auth:AuthService,private firestore: Firestore,private toastr: ToastrService){
    
  }

  ngOnInit(): void {
    // loading backend booking data
    this.getData()
    // console.log(this.filteredBoxes)
    this.getWishlistData()
    // console.log(this.wishListBoxes)

    this.wishListBoxes.forEach(box => {
      if(box.addWish) this.len++
    })

    console.log(this.len)
    
    // retreiving user details from firebase
    this.fireauth.currentUser.then((user) =>{
      // console.log(user)

      // receiving the data
      this.data = user

      // extracting the name from email and formatting it
      this.name = this.data.email
      this.name = this.name.substring(0,this.name.indexOf('@'))
      this.name = this.name[0].toUpperCase() + this.name.slice(1)
      // console.log(this.name)
    },err => {
      console.log(err.message)
    })   
  }

  // To count the total number of wishlisted packages
  countWish(){
    let len = 0;
    for(let box of this.wishListBoxes){
      if(box.addWish) len = len + 1
    }
    return len
  }

  logOut(){
    this.auth.logout()
  }

  // populating the booking list
  // reading data from firestore
  getData(){
    const dataInstance = collection(this.firestore,'bookingList')
    // manually extacting the id using idField
    collectionData(dataInstance,{ idField: 'idd' }).subscribe(val => {
    this.filteredBoxes = val
    
    
  },err => {
    this.toastr.error(err.message,"Error Log")
  })
}

  getWishlistData(){
    const dataInstance2 = collection(this.firestore,'wishlist');

    collectionData(dataInstance2,{ idField: 'idd' }).subscribe(val1 => {
      this.wishListBoxes = val1
      
      
    },err => {
      this.toastr.error(err.message,"Error Log")
    })
  }

}
