import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { DeviceUnavailableComponent } from './device-unavailable/device-unavailable.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    StatusCardComponent,
    DeviceUnavailableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
