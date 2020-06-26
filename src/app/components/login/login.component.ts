import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(to: string){
    this.router.navigate([to]);
  }

  goToInicio(){
    this.navigateTo("/inicio");
  }

  LogIn(){
    
  }

}
