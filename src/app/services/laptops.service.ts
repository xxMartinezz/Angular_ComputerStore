import { Injectable } from '@angular/core';
import { Laptop } from '../classes/laptop';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService 
{

  private laptops: Laptop[];

  constructor() 
  { 
    this.laptops = 
    [
      {laptopId: 1, laptopName: 'MSI GV72 8RC', laptopSystem: 'Windows 10 Home', laptopProcessor: 'i7-8750H', laptopGraphics: 'NVIDIA GTX1050 + Intel UHD Graphics 630', laptopMemory: '8 GB', laptopStorageDrives: 'HDD 1TB + SSD 240GB', laptopInputs: '', laptopWarranty: '2 lata', laptopPrice: '4399,00 zł', laptopAmount: 4, laptopBattery: '3834 mAh Li-Ion', laptopScreen: '17,3 matowy IPS', laptopImage: '../assets/msi_gv72.jpg'},
      {laptopId: 2, laptopName: 'Acer Aspire 5', laptopSystem: 'Windows 10 Home', laptopProcessor: 'i5-8265U', laptopGraphics: 'NVIDIA MX250 + Intel UHD Graphics 620', laptopMemory: '8 GB', laptopStorageDrives: 'SSD 512GB', laptopInputs: '', laptopWarranty: '2 lata', laptopPrice: '3199,00 zł', laptopAmount: 10, laptopBattery: '3220 mAh Li-Ion', laptopScreen: '15,6 matowy IPS', laptopImage: '../assets/acer_aspire5.jpg'},
    ];
  }

  getLaptopList(): Observable<Laptop[]>
  {
    return of(this.laptops);
  }
}
