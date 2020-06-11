import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  links = [
    { title: 'Systems', link: 'systems', icon: 'cogs' },
    { title: 'Training', link: 'training', icon: 'chalkboard-teacher' },
    { title: 'About', link: 'about', icon: 'info' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
