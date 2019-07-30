import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Header1Component } from './shared/header1/header1.component';
import { Slider1Component } from './shared/slider1/slider1.component';
import { LoginHeaderComponent } from './shared/login-header/login-header.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { AboutComponent } from './shared/about/about.component';
import { CounterComponent } from './shared/counter/counter.component';
import { ServicesComponent } from './shared/services/services.component';
import { PriceTableComponent } from './shared/price-table/price-table.component';
import { PriceTestimonialComponent } from './shared/price-testimonial/price-testimonial.component';
import { ClientCardComponent } from './shared/client-card/client-card.component';
import { NewsComponent } from './shared/news/news.component';
import { NewslatterComponent } from './shared/newslatter/newslatter.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TeamComponent } from './shared/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Header1Component,
    Slider1Component,
    LoginHeaderComponent,
    FeatureComponent,
    AboutComponent,
    CounterComponent,
    ServicesComponent,
    PriceTableComponent,
    PriceTestimonialComponent,
    ClientCardComponent,
    NewsComponent,
    NewslatterComponent,
    FooterComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
