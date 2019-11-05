import { Component, OnInit } from '@angular/core';
import { Computer, ComputerPage } from 'src/app/classes/computer';
import { ComputersService } from 'src/app/services/computers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  private computerList: Computer[];

  constructor(private computerService: ComputersService) { }

  ngOnInit() 
  {
    this.computerService.getComputers().subscribe(computersPage => {
    console.log('computer list', computersPage);
    this.computerList = computersPage.content;
    });
  }

}
