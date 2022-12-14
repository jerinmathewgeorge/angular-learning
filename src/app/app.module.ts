import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { EventsComponent } from './events/events.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { DeviceUnavailableComponent } from './device-unavailable/device-unavailable.component';
import { LatencyComponent } from './latency/latency.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LayoutInterceptor } from './layout.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DeviceUnavailableComponent,
    EventsComponent,
    StatusCardComponent,
    LatencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LayoutInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
