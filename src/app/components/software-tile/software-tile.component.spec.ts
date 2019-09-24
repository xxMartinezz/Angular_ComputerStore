import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareTileComponent } from './software-tile.component';

describe('SoftwareTileComponent', () => {
  let component: SoftwareTileComponent;
  let fixture: ComponentFixture<SoftwareTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
