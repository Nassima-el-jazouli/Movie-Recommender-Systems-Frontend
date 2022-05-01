import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { DetailsComponent } from './details/details.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { PremiereComponent } from './premiere/premiere.component';
import { PartnersComponent } from './partners/partners.component';
import { PricingComponent } from './pricing/pricing.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    DetailsComponent,
    BlogComponent,
    AboutComponent,
    FilmsComponent,
    HomeComponent,
    ContentComponent,
    PremiereComponent,
    PartnersComponent,
    PricingComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
