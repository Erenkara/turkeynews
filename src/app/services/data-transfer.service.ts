import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private categoryName = new BehaviorSubject("");
  currentMessage = this.categoryName.asObservable();

  constructor() { }

  changeMessage(categoryName: string) {
    this.categoryName.next(categoryName)
  }
}