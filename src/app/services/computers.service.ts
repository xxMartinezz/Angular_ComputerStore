import { Injectable } from '@angular/core';
import { Computer, ComputerPage } from '../classes/computer';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  private restApiUrl = 'http://localhost:8080/store';

  constructor(private httpClient: HttpClient) { }

  /*private computers: Computer[];

  constructor() 
  { 
    this.computers =
    [
      {computerId: 1, computerName: 'HP 285', computerSystem: 'Windows 10 Pro', computerProcessor: 'Intel Core i5-9400F', computerGraphics: 'NVIDIA GTX 1060', computerMemory: '16GB', computerStorageDrivers: 'HDD 1TB', computerPrice: '3999,00 zł', computerAmount: 10, computerImage: '../assets/hp_285.png'},
      {computerId: 2, computerName: 'Dell Vostro', computerSystem: 'Windows 10 Home', computerProcessor: 'Intel Core i5-8400F', computerGraphics: 'NVIDIA GTX 1050Ti', computerMemory: '16GB', computerStorageDrivers: 'HDD 1TB + SSD 256GB', computerPrice: '3899,00 zł', computerAmount: 10, computerImage: '../assets/hp_285.png'}
    ];
  }

  getComputerList(): Observable<Computer[]>
  {
    return of(this.computers);
  }*/

  getComputers(): Observable<ComputerPage> 
  {
    return this.httpClient.get<ComputerPage>(`${this.restApiUrl}/computerList`);
  }

  getComputerById(id: number): Observable<Computer>
  {
    return this.httpClient.get<Computer>(`${this.restApiUrl}/computerList/${id}`);
  }

  addComputer(computer: Computer): Observable<Computer>
  {
    return this.httpClient.post<Computer>(`${this.restApiUrl}/computerList`, computer);
  }

  delete(id: number): Observable<Computer>
  {
    return this.httpClient.delete<Computer>(`${this.restApiUrl}/computerList/${id}`);
  }
}
