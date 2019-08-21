import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerTileComponent } from './computer-tile.component';

describe('ComputerTileComponent', () => {
  let component: ComputerTileComponent;
  let fixture: ComponentFixture<ComputerTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
