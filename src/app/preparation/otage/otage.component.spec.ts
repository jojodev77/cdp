import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtageComponent } from './otage.component';

describe('OtageComponent', () => {
  let component: OtageComponent;
  let fixture: ComponentFixture<OtageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
