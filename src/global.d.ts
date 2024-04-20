declare var paypal:any;
declare var isLoggedIn: boolean;
declare var paid: boolean;

class inVoice {
    firstName: string;
    lastName: string;
    email: string;
    price: number;
    package: string;
    payment: string;
    date: Date;
    count: number;
  
  
    constructor(firstName: string, lastName: string, email:string,price: number,package:string,payment:string,date:Date,count:number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }