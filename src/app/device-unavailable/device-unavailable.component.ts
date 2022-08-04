import { Component, OnInit } from '@angular/core';
import { Device } from './device-unavailable';

@Component({
  selector: 'app-device-unavailable',
  templateUrl: './device-unavailable.component.html',
  styleUrls: ['./device-unavailable.component.css']
})
export class DeviceUnavailableComponent implements OnInit {

  constructor() { }
   deviceData: Device[]=[{
    "_id": {
      "$oid": "62eb6fd71c47a73d87125eb8"
    },
    "Device": "Vienna-srv",
    "PingState": "down",
    "IP": "192.168.1.0",
    "Time": "48minutes, 59seconds, 10milliseconds",
    "Location": "Vienna",
    "Contact": "vienna-support@gmail.com"
  },{
    "_id": {
      "$oid": "62eb6fdf1c47a73d87125eb9"
    },
    "Device": "Vienna-srv",
    "PingState": "down",
    "IP": "192.168.1.0",
    "Time": "48minutes, 59seconds, 10milliseconds",
    "Location": "Vienna",
    "Contact": "vienna-support@gmail.com"
  },{
    "_id": {
      "$oid": "62eb6fe41c47a73d87125eba"
    },
    "Device": "Vienna-srv",
    "PingState": "down",
    "IP": "192.168.1.0",
    "Time": "48minutes, 59seconds, 10milliseconds",
    "Location": "Vienna",
    "Contact": "vienna-support@gmail.com"
  },{
    "_id": {
      "$oid": "62eb6fe71c47a73d87125ebb"
    },
    "Device": "Vienna-srv",
    "PingState": "down",
    "IP": "192.168.1.0",
    "Time": "48minutes, 59seconds, 10milliseconds",
    "Location": "Vienna",
    "Contact": "vienna-support@gmail.com"
  },{
    "_id": {
      "$oid": "62eb6fea1c47a73d87125ebc"
    },
    "Device": "Vienna-srv",
    "PingState": "down",
    "IP": "192.168.1.0",
    "Time": "48minutes, 59seconds, 10milliseconds",
    "Location": "Vienna",
    "Contact": "vienna-support@gmail.com"
  },{
    "_id": {
      "$oid": "62eb6fed1c47a73d87125ebd"
    },
    "Device": "Vienna-srv",
    "PingState": "down",
    "IP": "192.168.1.0",
    "Time": "48minutes, 59seconds, 10milliseconds",
    "Location": "Vienna",
    "Contact": "vienna-support@gmail.com"
  },{
    "_id": {
      "$oid": "62eb6fff1c47a73d87125ec5"
    },
    "Device": "Vienna-srv",
    "PingState": "down",
    "IP": "192.168.1.0",
    "Time": "48minutes, 59seconds, 10milliseconds",
    "Location": "Vienna",
    "Contact": "vienna-support@gmail.com"
  },
  {
    "_id": {
      "$oid": "62eb6fff1c47a73d87125ec5"
    },
    "Device": "Vienna-srv",
    "PingState": "down",
    "IP": "192.168.1.0",
    "Time": "48minutes, 59seconds, 10milliseconds",
    "Location": "Vienna",
    "Contact": "vienna-support@gmail.com"
  },
]

  ngOnInit(): void {
  }

}
