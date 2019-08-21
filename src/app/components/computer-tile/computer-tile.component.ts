import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-computer-tile',
  templateUrl: './computer-tile.component.html',
  styleUrls: ['./computer-tile.component.css']
})
export class ComputerTileComponent implements OnInit {

  @Input() computerId;
  @Input() computerName;
  @Input() computerSystem;
  @Input() computerProcessor;
  @Input() computerGraphics;
  @Input() computerMemory;
  @Input() computerStorageDrivers;
  @Input() computerInputs;
  @Input() computerWarranty;
  @Input() computerPrice;
  @Input() computerAmount;
  @Input() computerImage;

  constructor() { }

  ngOnInit() {
  }

}
