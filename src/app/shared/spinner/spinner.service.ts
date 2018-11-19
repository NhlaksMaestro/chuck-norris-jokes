import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public visibility: EventEmitter<boolean> = new EventEmitter();
  public notVisibility: EventEmitter<boolean> = new EventEmitter();
}
