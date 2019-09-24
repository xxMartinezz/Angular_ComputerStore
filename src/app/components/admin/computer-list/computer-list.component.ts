import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/classes/computer';
import { ComputersService } from 'src/app/services/computers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  private computers: Computer[];

  constructor(private computersService: ComputersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.computersService.getComputerList().subscribe (computers => { this.computers = computers; });
  }

}
