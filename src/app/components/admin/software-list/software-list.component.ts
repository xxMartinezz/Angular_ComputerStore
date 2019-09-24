import { Component, OnInit } from '@angular/core';
import { Software } from 'src/app/classes/software';
import { SoftwaresService } from 'src/app/services/softwares.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent implements OnInit {

  private softwares: Software[];

  constructor(private softwareService: SoftwaresService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.softwareService.getSoftwareList().subscribe( softwares => 
      {
        this.softwares = softwares;
      })
  }

}
