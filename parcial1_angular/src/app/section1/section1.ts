import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  imports: [],
  templateUrl: './section1.html',
  styleUrl: './section1.css',
})
export class Section1 {

  protected readonly items: string[] = [
    'carousel-1',
    'carousel-2',
    'carousel-3'
  ];
}
