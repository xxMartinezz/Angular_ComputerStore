import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-software-tile',
  templateUrl: './software-tile.component.html',
  styleUrls: ['./software-tile.component.css']
})
export class SoftwareTileComponent implements OnInit {

  @Input() softwareVersion;
  @Input() softwareArchitecture;
  @Input() softwareLicence;
  @Input() softwareAmountOfPositions;
  @Input() softwareLanguage;
  @Input() softwareImage;
  @Input() softwarePrice;
  @Input() softwareId;

  constructor() { }

  ngOnInit() {
  }

}
