import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  hobbies = [
    'Reading books',
    'Gym & yoga',
    'Playing video games'
  ];

  ngOnInit(): void {
  }

}
