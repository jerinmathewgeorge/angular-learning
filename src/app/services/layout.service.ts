import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Device} from '.././device-unavailable/device-unavailable'


@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http:HttpClient) { }

  getDevicesList(){
    return this.http.get('http://localhost:3000/devices/');
  }
  getLatencyList(){
    return this.http.get('http://localhost:3000/latency/');
  }
  getEventsList(){
    return this.http.get('http://localhost:3000/events/');
  }

  addDevices(dev:Device){
    return this.http.post('http://localhost:3000/devices/', dev);
  }
}
