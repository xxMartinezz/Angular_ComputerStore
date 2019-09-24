import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/classes/laptop';
import { LaptopsService } from 'src/app/services/laptops.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {

  private laptops: Laptop[];

  constructor(private laptopsService: LaptopsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.laptopsService.getLaptopList().subscribe( laptops => {
      this.laptops = laptops;
    });
  }

}
