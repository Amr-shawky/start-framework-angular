import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer} from './component/footer/footer';
import { Navbar } from './component/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'start-framework-angular';
}
