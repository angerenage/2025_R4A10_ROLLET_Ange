import { Injectable } from '@angular/core';

export type Travel = {
  description: string;
  departure: string;
  destination: string;
  price: number;
  startDate: Date;
  endDate: Date;
};

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  constructor() { }

  getTravels() : Travel[] {
    return [
      {
        description: 'Test travel description',
        departure: 'Paris',
        destination: 'New York',
        price: 999,
        startDate: new Date('2024-02-18'),
        endDate: new Date('2024-02-25')
      }
    ];
  }
}
