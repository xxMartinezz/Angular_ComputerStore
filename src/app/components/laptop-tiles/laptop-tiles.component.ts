import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/classes/laptop';
import { LaptopsService } from 'src/app/services/laptops.service';

@Component({
  selector: 'app-laptop-tiles',
  templateUrl: './laptop-tiles.component.html',
  styleUrls: ['./laptop-tiles.component.css']
})
export class LaptopTilesComponent implements OnInit {

  private laptops: Laptop[];

  constructor(private laptopService: LaptopsService) { }

  ngOnInit() 
  {
    this.laptopService.getLaptopList().subscribe (laptops => {
      this.laptops = laptops;
    });
  }

}
