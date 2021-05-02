import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  constructor() {}
  sololearnCourses: any[] = [
    { item: 'React + Redux course' },
    { item: 'Javascript Tutorial' },
    { item: 'SQL Tutorial' },
    { item: 'HTML/CSS' },
  ];

  ngOnInit(): void {}
}
