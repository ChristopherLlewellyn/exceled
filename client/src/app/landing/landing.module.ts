import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  declarations: [
    LandingComponent,
    HeroComponent,
    AboutComponent,
    SystemsComponent,
    TrainingComponent,
    ContactComponent
  ],
  exports: [
    LandingComponent,
    HeroComponent,
    AboutComponent,
    SystemsComponent,
    TrainingComponent,
    ContactComponent
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
