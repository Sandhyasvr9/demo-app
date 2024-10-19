import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  // navigate(path) {
  //   console.log(localStorage.getItem('authToken'))
  //   if (!localStorage.getItem('authToken')) {
  //     this.router.navigate([`/${path}`]);

  //   } else {
  //     this.router.navigate(['login']);
  //   }
  // }
}
