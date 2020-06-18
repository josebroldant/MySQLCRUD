import { Component, OnInit } from '@angular/core';
import { ImageSequenceService } from 'src/app/services/image-sequence.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
    //this.ImageSequence.imageSequence();
  }

  navigateTo(to: string){
    this.router.navigate([to]);
  }

  signIn(){
    this.navigateTo("/login");
  }

}
