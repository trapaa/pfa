import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterMComponent } from './consulter-m.component';

describe('ConsulterMComponent', () => {
  let component: ConsulterMComponent;
  let fixture: ComponentFixture<ConsulterMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
