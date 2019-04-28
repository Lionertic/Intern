import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasactComponent } from './trasact.component';

describe('TrasactComponent', () => {
  let component: TrasactComponent;
  let fixture: ComponentFixture<TrasactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
