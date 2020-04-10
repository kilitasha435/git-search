import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileService } from '../app/profile.service';
// import { DatecountPipe } from '../app/datecount.pipe'
import { UserComponent } from './user/user.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { DatecountPipe } from './datecount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LandingComponent,
    DatecountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
