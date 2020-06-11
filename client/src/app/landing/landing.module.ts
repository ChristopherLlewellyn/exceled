import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//* Components
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SystemsComponent } from './systems/systems.component';

@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    SystemsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
