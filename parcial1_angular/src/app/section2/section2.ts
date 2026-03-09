import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  imports: [CommonModule],
  templateUrl: './section2.html',
  styleUrl: './section2.css',
})
export class Section2 {

  protected readonly specialties: Map<string,string> = new Map();
  protected readonly doctors: Map<string,string[]> = new Map();

  constructor()
  {
    this.loadSpecialties();
    this.loadDoctors();
  }

  private loadSpecialties()
  {
    this.specialties.set('Terapia Neural', 'Descripción de Terapia Neural')
    this.specialties.set('Quiropraxia', 'Descripción de Quiropraxia')
    this.specialties.set('Fisioterapia', 'Descripción de Fisioterapia')
    this.specialties.set('Nutrición', 'Descripción de Nutrición')
    this.specialties.set('Dietética Terapéutica', 'Descripción de Dietética Terapéutica')
  }

  protected getDescriptionSpeciality(prmSpeciality: string)
  {
    return this.specialties.get(prmSpeciality); 
  }

  private loadDoctors()
  {
    this.doctors.set(
      'Dr. Juan Peréz', 
      ['Especialista en Fisioterapia Deportiva.', 'Comprometido con tu recuperación']
    );
    this.doctors.set(
      'Dr. Catalina Sanchez', 
      ['Especialista en Quiropraxia.', 'La salud es fundamental']
    );
    this.doctors.set(
      'Dr. Andres Cardozo',
      ['Especialista en Nutrición y Dietética Terapéutica.', 'Un alimento sano alrga la vida']
    );
    this.doctors.set(
      'Dr. Solano',
      ['Especialista en Quiropraxia y Fisioterapia.', 'Comprometido con tu recuperación']
    );
    this.doctors.set(
      'Dr. Paez',
      ['Especialista en Terapia Neural.', 'Comprometido con tu bienestar']
    );
  }
}
