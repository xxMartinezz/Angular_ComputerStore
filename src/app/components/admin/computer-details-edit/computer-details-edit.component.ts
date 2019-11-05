import { Component, OnInit, ViewChild } from '@angular/core';
import { Computer } from 'src/app/classes/computer';
import { ComputersService } from 'src/app/services/computers.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-computer-details-edit',
  templateUrl: './computer-details-edit.component.html',
  styleUrls: ['./computer-details-edit.component.css']
})
export class ComputerDetailsEditComponent implements OnInit {
  @ViewChild("form") form: NgForm;

  private computer: Computer = new Computer("Name", "System", "Processor", "Graphics", "Memory", "Storage drivers", "Inputs", "Warranty", "Price", 100, "image");

  constructor(private computersService: ComputersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      if(parameters && parameters['id']) {
        this.computersService.getComputerById(+parameters['id']).subscribe(response => {
          this.computer = response;
        })
      }
    })
  }

  onSubmit() {
    /*console.log(this.computer);
    console.log(this.form.value);
    console.log(this.form.valid);
    console.log(this.form.dirty);
    console.log(this.form.touched);*/

    if (this.form.valid) {
      console.log('this.computer', this.computer);
      this.computersService.addComputer(this.computer).subscribe(value => {
        this.router.navigate(['/admin/computerList']);
      });
    }
  }

}
