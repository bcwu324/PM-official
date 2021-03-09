import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { QandaComponent } from './qanda/qanda.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { HomePortfolioComponent } from './home-portfolio/home-portfolio.component';
import { HomeEndorsementComponent } from './home-endorsement/home-endorsement.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    PortfolioComponent,
    AboutusComponent,
    QandaComponent,
    HomeCarouselComponent,
    HomeServiceComponent,
    HomePortfolioComponent,
    HomeEndorsementComponent,
    HomeContactComponent,
    FooterComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
