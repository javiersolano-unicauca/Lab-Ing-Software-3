import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Nav } from './nav/nav';
import { Section1 } from './section1/section1';
import { Section2 } from './section2/section2';
import { Section3 } from './section3/section3';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Header, 
    Nav,
    Section1,
    Section2,
    Section3,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('parcial1_angular');
}
