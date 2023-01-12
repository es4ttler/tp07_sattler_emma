import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant-header',
  templateUrl: './composant-header.component.html',
  styleUrls: ['./composant-header.component.css']
})

export class ComposantHeaderComponent implements OnInit {
  title = 'Application n°5'
  name = 'Emma SATTLER'
  constructor() { }

  ngOnInit(): void {
  }

}
