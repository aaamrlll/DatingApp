import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registermode = false;

  constructor(private router: Router, private authservice: AuthService) {

  }

  ngOnInit() {
    if (this.authservice.loggedIn()) {
        this.router.navigate(['/members']);
    }

  }
}
