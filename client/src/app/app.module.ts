import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//* FontAwesome Icons
// https://www.tektutorialshub.com/angular/how-to-install-use-angular-fontawesome/
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome'
import { 
  faHome,
  faCogs,
  faChalkboardTeacher,
  faInfo
} from '@fortawesome/free-solid-svg-icons';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faHome,
      faCogs,
      faChalkboardTeacher,
      faInfo
    );
  }

}
