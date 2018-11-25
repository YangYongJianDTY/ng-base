import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifymmComponent } from './modifymm.component';

describe('ModifymmComponent', () => {
  let component: ModifymmComponent;
  let fixture: ComponentFixture<ModifymmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifymmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifymmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
