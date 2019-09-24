import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-laptop-tile',
  templateUrl: './laptop-tile.component.html',
  styleUrls: ['./laptop-tile.component.css']
})
export class LaptopTileComponent implements OnInit {

  @Input() laptopId;
  @Input() laptopName;
  @Input() laptopSystem;
  @Input() laptopProcessor;
  @Input() laptopGraphics;
  @Input() laptopMemory;
  @Input() laptopStorageDrivers;
  @Input() laptopInputs;
  @Input() laptopWarranty;
  @Input() laptopPrice;
  @Input() laptopAmount;
  @Input() laptopImage;
  @Input() laptopBattery;
  @Input() laptopScreen;


  constructor() { }

  ngOnInit() {
  }

}
