import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [ FontAwesomeModule,  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
faFacebook = faFacebook;
faTwitter = faTwitter;
faLinkedinIn = faLinkedinIn;
faGlobe = faGlobe;
}
