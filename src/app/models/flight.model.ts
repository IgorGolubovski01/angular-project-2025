// {
//       "id": 198103,
//       "type": {
//         "id": 2,
//         "name": "DEPARTURE"
//       },
//       "flightKey": "202507072150IDW6 40030W6 4003",
//       "flightNumber": "W6 4003",
//       "destination": "Heraklion",
//       "scheduledAt": "2025-07-07T21:50:00",
//       "estimatedAt": "2025-07-07T21:20:00",
//       "connectedType": "0",
//       "connectedFlight": null,
//       "plane": "32A",
//       "gate": null,
//       "terminal": "1"
//     }

export interface FlightModel{
    id: number
    type: {
        id: number,
        name: string
    }
    flightKey: string
    flightNumber: string
    destination: string
    scheduledAt: string
    estimatedAt: null | string
    connectedType: string
    connectedFlight: string
    plane: string
    gate: null | string
    terminal: string
    
}