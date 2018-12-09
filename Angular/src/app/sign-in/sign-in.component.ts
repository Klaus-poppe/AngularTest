import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataProviderService } from '../services/data-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    userData:any;
    loginForm:FormGroup;
  constructor(public data:DataProviderService, private router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'uname': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'pass': new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]),
    });
  }

  login()
      {
        this.data.getLoginDetailsUsingUname(this.loginForm.value.uname).subscribe(
          result =>{
            this.userData = result;
            this.loginCheck();
          },
          error=>{
          console.error();
          }
        );
      }
    
      loginCheck()
      {
        if(this.loginForm.value.uname == this.userData.uname && this.loginForm.value.pass == this.userData.pass)
        {
          this.router.navigate(['/home']);
        }
    
        else
          alert("Fail");
      }

}
