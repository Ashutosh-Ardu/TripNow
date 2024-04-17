import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit{

  detForm = new FormGroup({
    fname : new FormControl('',[Validators.pattern('[A-Za-z]{1,20}'),Validators.required]),
    lname : new FormControl('',[Validators.pattern('[A-Za-z]{1,20}'),Validators.required]),
    email : new FormControl('',[Validators.email,Validators.required]),
    phno : new FormControl('',[Validators.pattern('[6-9]{1}[0-9]{9}'),Validators.required]),
    doj: new FormControl('',Validators.required),
    code : new FormControl(''),
  })
  
  ngOnInit(): void {
    
  }

  get fCon(){
    return this.detForm['controls'];
  }


  onSubmit(){
    console.log(this.detForm);
  }
}
