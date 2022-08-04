import { Component, OnInit } from '@angular/core';
import { IDevicelatency } from './IlatencyInterface';

@Component({
  selector: 'app-latency',
  templateUrl: './latency.component.html',
  styleUrls: ['./latency.component.css']
})
export class LatencyComponent implements OnInit {

  constructor() { }

  deviceData: IDevicelatency []=[
    {
      devices:'laptop',
      pingAvg:'73.25',
      pingMin:'42',
      pingMax:'139'
    },{
      devices:'laptop',
      pingAvg:'73.25',
      pingMin:'42',
      pingMax:'139'
    },{
      devices:'laptop',
      pingAvg:'73.25',
      pingMin:'42',
      pingMax:'139'
    }
  ];

  ngOnInit(): void {

  }



}