import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikedWidgetComponent } from './shered/components/liked-widget/liked-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './shered/services/unique-id/unique-id.service';

@NgModule({
  declarations: [
    AppComponent,
    LikedWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [UniqueIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
