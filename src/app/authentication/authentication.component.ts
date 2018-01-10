import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  show: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  alert() {
    this.show = true;
  }

  loginUser(e) {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    if (username === 'admin' && password === '123') {
      this.router.navigate(['accueil']);
    }
  }
}
