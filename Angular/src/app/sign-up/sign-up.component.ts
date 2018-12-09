import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { DataProviderService } from '../services/data-provider.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public data:DataProviderService, public router:Router)
  {

  }

  signUpForm: FormGroup;

  user:{
    uname:string,
    email:string,
    pass:string,
  };

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'uname': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'pass': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]),
      'passC': new FormControl(null, [Validators.required])
    });
  }

  register()
  {
    this.user = this.signUpForm.value;
    this.data.registerUser(this.user)
    .subscribe(
      result => {
        console.log(result);
        alert("success")
        this.router.navigate(['signIn']);
      },
      error=>{
        console.error()
      }
    );

    this.router.navigate(['signIn']);
  }

}
