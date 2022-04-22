import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMComponent } from './modifier-m.component';

describe('ModifierMComponent', () => {
  let component: ModifierMComponent;
  let fixture: ComponentFixture<ModifierMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
