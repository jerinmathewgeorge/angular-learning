export interface iEvents {
    _id?: {
      "$oid": string
    },
    Time: string
    Devices: string,
    Entity: string,
    Event: string,
    State: string,
    TimePrevState: string
}