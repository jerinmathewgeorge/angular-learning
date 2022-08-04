import { Component, OnInit, Input } from '@angular/core'
import { iEvents } from './events'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @Input() eventList: iEvents[] = []
  constructor() { 
    
  }
  events: iEvents[] = [{
    "_id": {
      "$oid": "62eb6f1a1c47a73d87125eb0"
    },
    "Time": "2019-08-19 09:33:40",
    "Devices": "10.119.44.12",
    "Entity": "10.119.44.12",
    "Event": ".pingState",
    "State": "down",
    "TimePrevState": "9hours, 59minutes, 51seconds"
  },{
    "_id": {
      "$oid": "62eb6f571c47a73d87125eb2"
    },
    "Time": "2019-08-19 09:33:40",
    "Devices": "10.119.44.12",
    "Entity": "10.119.44.12",
    "Event": ".pingState",
    "State": "down",
    "TimePrevState": "9hours, 59minutes, 51seconds"
  },{
    "_id": {
      "$oid": "62eb6f751c47a73d87125eb3"
    },
    "Time": "2019-08-19 09:33:40",
    "Devices": "10.119.44.12",
    "Entity": "10.119.44.12",
    "Event": ".pingState",
    "State": "down",
    "TimePrevState": "9hours, 59minutes, 51seconds"
  },{
    "_id": {
      "$oid": "62eb6ff31c47a73d87125ec0"
    },
    "Time": "2019-08-19 09:33:40",
    "Devices": "10.119.44.12",
    "Entity": "10.119.44.12",
    "Event": ".pingState",
    "State": "down",
    "TimePrevState": "9hours, 59minutes, 51seconds"
  },{
    "_id": {
      "$oid": "62eb6ff51c47a73d87125ec1"
    },
    "Time": "2019-08-19 09:33:40",
    "Devices": "10.119.44.12",
    "Entity": "10.119.44.12",
    "Event": ".pingState",
    "State": "down",
    "TimePrevState": "9hours, 59minutes, 51seconds"
  },{
    "_id": {
      "$oid": "62eb6ff81c47a73d87125ec2"
    },
    "Time": "2019-08-19 09:33:40",
    "Devices": "10.119.44.12",
    "Entity": "10.119.44.12",
    "Event": ".pingState",
    "State": "down",
    "TimePrevState": "9hours, 59minutes, 51seconds"
  },{
    "_id": {
      "$oid": "62eb70041c47a73d87125ec8"
    },
    "Time": "2019-08-19 09:33:40",
    "Devices": "10.119.44.12",
    "Entity": "10.119.44.12",
    "Event": ".pingState",
    "State": "down",
    "TimePrevState": "9hours, 59minutes, 51seconds"
  }];
 
 
  ngOnInit(): void {
  }

}
