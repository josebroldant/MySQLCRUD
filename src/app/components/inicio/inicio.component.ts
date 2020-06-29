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
    /*
    const audio = new Audio('assets/LiveAgain.mp3');
    audio.play();
    if(audio.currentTime>0 && audio.currentTime<10){
      audio.pause();
    }
    */
  }

  navigateTo(to: string){
    this.router.navigate([to]);
  }

  signIn(){
    this.navigateTo("/login");
  }

  registerNow(){
    this.navigateTo("/register-form");
  }

  whoWeAre(){
    this.navigateTo("/who-we-are");
  }

  authorRights(){
    this.navigateTo("/author-rights-policy");
  }

  contactUs(){
    this.navigateTo("/contact");
  }

  goToDjs(){
    this.navigateTo("/djs");
  }

  goToGenres(){
    this.navigateTo("/genres");
  }

  goToPlaces(){
    this.navigateTo("/rave-places");
  }

  goToPromoters(){
    this.navigateTo("/promoters");
  }

  goToEvents(){
    this.navigateTo("/next-events");
  }

  goToOrigins(){
    this.navigateTo("/origins");
  }

}
