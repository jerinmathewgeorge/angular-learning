import { Component, OnInit, Input } from '@angular/core';
import { Device } from './device-unavailable';

@Component({
  selector: 'app-device-unavailable',
  templateUrl: './device-unavailable.component.html',
  styleUrls: ['./device-unavailable.component.css']
})
export class DeviceUnavailableComponent implements OnInit {
  @Input () deviceList: Device[]=[];
  filterasc:boolean = true

  constructor() { 
    this.filterDivice('asc')
  }
  ngOnInit(): void {
  }

  filterDivice(asc:string) :void{
    this.filterasc = !this.filterasc;
    this.deviceList.sort((a: Device,b: Device) =>{
      if(asc == 'asc'){
        return a.Device < b.Device ? 1 :- 1
      } else {
        return a.Device < b.Device ? -1 : 1
      }
    })
  }

}
