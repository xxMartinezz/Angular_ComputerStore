import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareTilesComponent } from './software-tiles.component';

describe('SoftwareTilesComponent', () => {
  let component: SoftwareTilesComponent;
  let fixture: ComponentFixture<SoftwareTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
