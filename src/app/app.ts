import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';
import { NavbarComponent } from './navbar/navbar';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected title = 'portfolio-website';
}
