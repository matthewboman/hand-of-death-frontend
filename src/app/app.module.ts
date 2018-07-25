import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpService } from './shared/http.service';
import { MobileNavbarComponent } from './core/mobile-navbar/mobile-navbar.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MobileNavbarComponent,
    NavbarComponent,
    StoreComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
