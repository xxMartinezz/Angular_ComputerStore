import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopTileComponent } from './laptop-tile.component';

describe('LaptopTileComponent', () => {
  let component: LaptopTileComponent;
  let fixture: ComponentFixture<LaptopTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
