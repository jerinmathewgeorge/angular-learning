import { Component, OnInit, Input } from '@angular/core';
import { IDevicelatency } from './IlatencyInterface';

@Component({
  selector: 'app-latency',
  templateUrl: './latency.component.html',
  styleUrls: ['./latency.component.css']
})
export class LatencyComponent implements OnInit {
  @Input () latencyList: IDevicelatency[]=[]
  constructor() { }

  ngOnInit(): void {

  }



}
