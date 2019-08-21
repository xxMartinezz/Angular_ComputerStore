import { Injectable } from '@angular/core';
import { Computer } from '../classes/computer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  private computers: Computer[];

  constructor() 
  { 
    this.computers =
    [
      {computerId: 1, computerName: 'HP 285', computerSystem: 'Windows 10 Pro', computerProcessor: 'Intel Core i5-9400F', computerGraphics: 'NVIDIA GeForce GTX 1060', computerMemory: '16GB', computerStorageDrives: 'HDD: 1TB', computerPrice: '3999,00 zł', coumputerAmount: 10, computerImage: '../assets/hp_285.png'},
      {computerId: 2, computerName: 'Dell Vostro', computerSystem: 'Windows 10 Home', computerProcessor: 'Intel Core i5-8400F', computerGraphics: 'NVIDIA GeForce GTX 1050Ti', computerMemory: '16GB', computerStorageDrives: 'HDD: 1TB + SSD: 256GB', computerPrice: '3899,00 zł', coumputerAmount: 10, computerImage: '../assets/dell_vostro.jpg'}
    ];
  }

  getComputerList(): Observable<Computer[]>
  {
    return of(this.computers);
  }

}
