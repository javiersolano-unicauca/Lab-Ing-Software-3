import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Doctor
{
  name: string; 
  gender: string;
  specialty: string;
  descriptionSpecialty: string;
}

@Component({
  selector: 'app-section2',
  imports: [CommonModule],
  templateUrl: './section2.html',
  styleUrl: './section2.css',
})
export class Section2 {

  protected readonly specialties: Map<string,string> = new Map();
  protected readonly doctors: Array<Doctor> = new Array();

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
    this.doctors.push({
      name: 'Dr. Juan Peréz',
      gender: 'male',
      specialty: 'Especialista en Fisioterapia Deportiva.',
      descriptionSpecialty: 'Comprometido con tu recuperación'
    });
    this.doctors.push({
      name: 'Dr. Catalina Sanchez',
      gender: 'female',
      specialty: 'Especialista en Quiropraxia.',
      descriptionSpecialty: 'La salud es fundamental'
    });
    this.doctors.push({
      name: 'Dr. Andres Cardozo',
      gender: 'male',
      specialty: 'Especialista en Nutrición y Dietética Terapéutica.',
      descriptionSpecialty: 'Un alimento sano alrga la vida'
    });
    this.doctors.push({
      name: 'Dr. Solano',
      gender: 'male',
      specialty: 'Especialista en Quiropraxia y Fisioterapia.',
      descriptionSpecialty: 'Comprometido con tu recuperación'
    });
    this.doctors.push({
      name: 'Dr. Paez',
      gender: 'male',
      specialty: 'Especialista en Terapia Neural.',
      descriptionSpecialty: 'Comprometido con tu bienestar'
    });
  }
}
