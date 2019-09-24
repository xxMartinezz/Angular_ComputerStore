import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Software } from '../classes/software';

@Injectable({
  providedIn: 'root'
})
export class SoftwaresService {

  private softwares: Software[];

  constructor() 
  {
    this.softwares =
    [
      {softwareId: 1, softwareVersion: 'Windows 10 Home', softwareArchitecture: '64-bitowa', softwareLicence: 'OEM', softwareAmountOfPositions: 1, softwareLanguage: 'polski', softwarePrice: '549 zł', softwareImage: '../assets/windows_10home.jpg'},
      {softwareId: 2, softwareVersion: 'Microsoft Office 365', softwareLicence: 'DVD', softwareAmountOfPositions: 1, softwareLanguage: 'polski', softwarePrice: '299 zł', softwareImage: '../assets/office_365.jpg'},
    ];
  }

  getSoftwareList(): Observable<Software[]>
  {
    return of(this.softwares);
  }
}
