import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @Input() latencyList = [];
  @Input() deviceList = [];
  @Input() eventList = [];
  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.getDeviceList();
    this.getEventList();
    this.getLatencyList();
  }
  getDeviceList(){
    this.layoutService.getDevicesList().subscribe((res:any)=>{
      this.deviceList = res;
      console.log(res);
    })
  }
  getEventList(){
    this.layoutService.getEventsList().subscribe((res:any)=>{
      this.eventList = res;
      console.log(res);
    })
  }
  getLatencyList(){
    this.layoutService.getLatencyList().subscribe((res:any)=>{
      this.latencyList = res;
      console.log(res);
    })
  }

}
