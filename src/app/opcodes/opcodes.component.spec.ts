import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcodesComponent } from './opcodes.component';

describe('OpcodesComponent', () => {
  let component: OpcodesComponent;
  let fixture: ComponentFixture<OpcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
