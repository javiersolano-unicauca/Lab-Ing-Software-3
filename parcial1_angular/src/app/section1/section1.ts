import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  imports: [],
  templateUrl: './section1.html',
  styleUrl: './section1.css',
})
export class Section1 {

  protected readonly items: string[] = [
    'carousel_1',
    'carousel_2',
    'carousel_3'
  ];
}
