import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerDetailsEditComponent } from './computer-details-edit.component';

describe('ComputerDetailsEditComponent', () => {
  let component: ComputerDetailsEditComponent;
  let fixture: ComponentFixture<ComputerDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
