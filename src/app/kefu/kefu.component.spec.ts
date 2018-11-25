import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KefuComponent } from './kefu.component';

describe('KefuComponent', () => {
  let component: KefuComponent;
  let fixture: ComponentFixture<KefuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KefuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
