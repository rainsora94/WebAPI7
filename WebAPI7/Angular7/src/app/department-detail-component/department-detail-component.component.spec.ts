import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailComponentComponent } from './department-detail-component.component';

describe('DepartmentDetailComponentComponent', () => {
  let component: DepartmentDetailComponentComponent;
  let fixture: ComponentFixture<DepartmentDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
