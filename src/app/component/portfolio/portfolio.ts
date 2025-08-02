import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  faStar = faStar;
  currentImageSrc: string = '';
  closeImage() {
    this.currentImageSrc = '';
  }

  openImage(src: string) {
    this.currentImageSrc = src;
  }
}
