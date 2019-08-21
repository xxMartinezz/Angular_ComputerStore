import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerTilesComponent } from './computer-tiles.component';

describe('ComputerTilesComponent', () => {
  let component: ComputerTilesComponent;
  let fixture: ComponentFixture<ComputerTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
