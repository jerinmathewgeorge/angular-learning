import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http:HttpClient) { }

  getDevicesList(){
    return this.http.get('http://localhost:3000/devices');
  }
  getLatencyList(){
    return this.http.get('http://localhost:3000/latency');
  }
  getEventsList(){
    return this.http.get('http://localhost:3000/events');
  }
}
