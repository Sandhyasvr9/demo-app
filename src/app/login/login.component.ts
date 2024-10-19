import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mobileNumber: string;
  password: string;
  isSubmitted: boolean;
  errMsg: string;

  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit(): void {

  }
  save() {
    this.isSubmitted = true;
    console.log(this.isSubmitted, this.mobileNumber)
    if (this.mobileNumber == '9553171711' && this.password == 'Sandhya@9905') {
      this.authService.setToken(this.mobileNumber)
      this.router.navigate(['dashboard'])
    } else {
      this.errMsg = 'Please enter valid dcredentials';
    }
  }
}
