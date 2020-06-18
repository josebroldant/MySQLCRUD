import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageSequenceService {

  constructor(private http: HttpClient) { }

  /*
  imageSequence(){
    const imagesArrayURLs = ["https://i.pinimg.com/originals/d4/26/3c/d4263c8341ac28a3f73e169b4b2866d9.jpg", "https://image.shutterstock.com/image-vector/dj-skull-icon-vivid-colors-600w-1205951797.jpg"];
    for (let index = 0; index < imagesArrayURLs.length; index++) {
      const elements = imagesArrayURLs[index];
    }
  }
  */
}
