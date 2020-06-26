import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-formregistro',
  templateUrl: './formregistro.component.html',
  styleUrls: ['./formregistro.component.css']
})
export class FormRegistroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(to: string){
    this.router.navigate([to]);
  }

  goToInicio(){
    this.navigateTo("/inicio");
  }

}
