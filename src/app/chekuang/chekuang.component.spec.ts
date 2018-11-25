import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekuangComponent } from './chekuang.component';

describe('ChekuangComponent', () => {
  let component: ChekuangComponent;
  let fixture: ComponentFixture<ChekuangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChekuangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekuangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
