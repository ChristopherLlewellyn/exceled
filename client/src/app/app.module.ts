import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
  faInfo,
  faCheckCircle,
  faEnvelopeSquare
} from '@fortawesome/free-solid-svg-icons';

import { NavbarComponent } from './navbar/navbar.component';
import { LandingModule } from './landing/landing.module';
import { FooterComponent } from './footer/footer.component';
import { ContactService } from './_services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    LandingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faHome,
      faCogs,
      faChalkboardTeacher,
      faInfo,
      faCheckCircle,
      faEnvelopeSquare
    );
  }

}
