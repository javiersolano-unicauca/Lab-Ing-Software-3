import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  protected items: Map<string,string> = new Map();

  constructor()
  {
    this.items.set('promotions', 'Promociones');
    this.items.set('dating-specialties', 'Especialidades y Citas');
    this.items.set('register', 'Formulario de registro');
  }
}
