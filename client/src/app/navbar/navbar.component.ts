import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  links = [
    { title: 'Systems', routerLink: '/systems', icon: 'cogs' },
    { title: 'Training', routerLink: '/training', icon: 'chalkboard-teacher' },
    { title: 'About Us', routerLink: '/about', icon: 'info' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
