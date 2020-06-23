import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//* FontAwesome Icons
// https://www.tektutorialshub.com/angular/how-to-install-use-angular-fontawesome/
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

//* Components
import { LandingComponent } from './landing.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SystemsComponent } from './systems/systems.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    LandingComponent,
    HeroComponent,
    AboutComponent,
    SystemsComponent,
    TrainingComponent
  ],
  exports: [
    LandingComponent,
    HeroComponent,
    AboutComponent,
    SystemsComponent,
    TrainingComponent
  ],
  bootstrap: [LandingComponent]
})
export class LandingModule { 

  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faCheckCircle
    );
  }
  
 }
