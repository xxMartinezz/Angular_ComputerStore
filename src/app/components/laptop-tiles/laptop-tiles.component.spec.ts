import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopTilesComponent } from './laptop-tiles.component';

describe('LaptopTilesComponent', () => {
  let component: LaptopTilesComponent;
  let fixture: ComponentFixture<LaptopTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
