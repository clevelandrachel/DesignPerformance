import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetouseService {

  constructor() { }
  add(a: number, b: number): number {
    return a + b;
  }
}
