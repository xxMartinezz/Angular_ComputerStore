import { Component, OnInit } from '@angular/core';
import { Software } from 'src/app/classes/software';
import { SoftwaresService } from 'src/app/services/softwares.service';

@Component({
  selector: 'app-software-tiles',
  templateUrl: './software-tiles.component.html',
  styleUrls: ['./software-tiles.component.css']
})
export class SoftwareTilesComponent implements OnInit {

  private softwares: Software[];

  constructor(private softwaresService: SoftwaresService) { }

  ngOnInit() 
  {
    this.softwaresService.getSoftwareList().subscribe (softwares => {
      this.softwares = softwares;
    });
  }

}
