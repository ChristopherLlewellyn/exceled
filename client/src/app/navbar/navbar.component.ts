import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  links = [
    { title: 'About', link: 'about', icon: 'info' },
    { title: 'Systems', link: 'systems', icon: 'cogs' },
    { title: 'Training', link: 'training', icon: 'chalkboard-teacher' },
    { title: 'Contact', link: 'contact', icon: 'envelope-square' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
