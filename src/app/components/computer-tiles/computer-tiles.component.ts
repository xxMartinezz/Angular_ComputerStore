import { Component, OnInit } from '@angular/core';
import { ComputersService } from 'src/app/services/computers.service';
import { Computer } from 'src/app/classes/computer';

@Component({
  selector: 'app-computer-tiles',
  templateUrl: './computer-tiles.component.html',
  styleUrls: ['./computer-tiles.component.css']
})
export class ComputerTilesComponent implements OnInit {
  
  private computers: Computer[];

  constructor(private computersService: ComputersService) { }

  ngOnInit() 
  {
    this.computersService.getComputerList().subscribe (computers => { 
      this.computers = computers;
    });
  }

}
